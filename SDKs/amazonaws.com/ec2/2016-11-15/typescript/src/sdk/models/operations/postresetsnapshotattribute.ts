import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostResetSnapshotAttributeActionEnum {
    ResetSnapshotAttribute = "ResetSnapshotAttribute"
}

export enum PostResetSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostResetSnapshotAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostResetSnapshotAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostResetSnapshotAttributeVersionEnum;
}


export class PostResetSnapshotAttributeHeaders extends SpeakeasyBase {
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


export class PostResetSnapshotAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostResetSnapshotAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: PostResetSnapshotAttributeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostResetSnapshotAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
