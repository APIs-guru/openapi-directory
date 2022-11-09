import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}

export enum PostConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostConfigureHealthCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostConfigureHealthCheckActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostConfigureHealthCheckVersionEnum;
}


export class PostConfigureHealthCheckHeaders extends SpeakeasyBase {
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


export class PostConfigureHealthCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigureHealthCheckQueryParams;

  @Metadata()
  headers: PostConfigureHealthCheckHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostConfigureHealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
