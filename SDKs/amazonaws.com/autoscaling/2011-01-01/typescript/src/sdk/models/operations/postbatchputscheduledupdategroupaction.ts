import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostBatchPutScheduledUpdateGroupActionActionEnum {
    BatchPutScheduledUpdateGroupAction = "BatchPutScheduledUpdateGroupAction"
}

export enum PostBatchPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostBatchPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchPutScheduledUpdateGroupActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchPutScheduledUpdateGroupActionVersionEnum;
}


export class PostBatchPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostBatchPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostBatchPutScheduledUpdateGroupActionQueryParams;

  @Metadata()
  headers: PostBatchPutScheduledUpdateGroupActionHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
