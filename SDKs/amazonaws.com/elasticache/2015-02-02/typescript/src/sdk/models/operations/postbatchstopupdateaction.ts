import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}

export enum PostBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostBatchStopUpdateActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchStopUpdateActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchStopUpdateActionVersionEnum;
}


export class PostBatchStopUpdateActionHeaders extends SpeakeasyBase {
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


export class PostBatchStopUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBatchStopUpdateActionQueryParams;

  @SpeakeasyMetadata()
  headers: PostBatchStopUpdateActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchStopUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
