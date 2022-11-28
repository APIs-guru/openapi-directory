import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}

export enum PostReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostReplaceIamInstanceProfileAssociationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostReplaceIamInstanceProfileAssociationVersionEnum;
}


export class PostReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
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


export class PostReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReplaceIamInstanceProfileAssociationQueryParams;

  @SpeakeasyMetadata()
  headers: PostReplaceIamInstanceProfileAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
