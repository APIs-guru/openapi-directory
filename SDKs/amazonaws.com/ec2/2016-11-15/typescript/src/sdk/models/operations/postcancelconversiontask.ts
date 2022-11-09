import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}

export enum PostCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostCancelConversionTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCancelConversionTaskActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCancelConversionTaskVersionEnum;
}


export class PostCancelConversionTaskHeaders extends SpeakeasyBase {
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


export class PostCancelConversionTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCancelConversionTaskQueryParams;

  @Metadata()
  headers: PostCancelConversionTaskHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCancelConversionTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
