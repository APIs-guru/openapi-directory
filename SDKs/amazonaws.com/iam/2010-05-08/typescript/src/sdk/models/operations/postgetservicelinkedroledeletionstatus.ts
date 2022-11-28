import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetServiceLinkedRoleDeletionStatusActionEnum {
    GetServiceLinkedRoleDeletionStatus = "GetServiceLinkedRoleDeletionStatus"
}

export enum PostGetServiceLinkedRoleDeletionStatusVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetServiceLinkedRoleDeletionStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetServiceLinkedRoleDeletionStatusActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetServiceLinkedRoleDeletionStatusVersionEnum;
}


export class PostGetServiceLinkedRoleDeletionStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostGetServiceLinkedRoleDeletionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetServiceLinkedRoleDeletionStatusQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetServiceLinkedRoleDeletionStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetServiceLinkedRoleDeletionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
