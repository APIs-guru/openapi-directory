import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBatchDeleteScheduledActionActionEnum {
    BatchDeleteScheduledAction = "BatchDeleteScheduledAction"
}

export enum PostBatchDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostBatchDeleteScheduledActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchDeleteScheduledActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchDeleteScheduledActionVersionEnum;
}


export class PostBatchDeleteScheduledActionHeaders extends SpeakeasyBase {
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


export class PostBatchDeleteScheduledActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBatchDeleteScheduledActionQueryParams;

  @SpeakeasyMetadata()
  headers: PostBatchDeleteScheduledActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchDeleteScheduledActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
