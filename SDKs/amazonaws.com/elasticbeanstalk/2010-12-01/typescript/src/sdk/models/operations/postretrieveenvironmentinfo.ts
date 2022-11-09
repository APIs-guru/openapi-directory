import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}

export enum PostRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostRetrieveEnvironmentInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRetrieveEnvironmentInfoActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRetrieveEnvironmentInfoVersionEnum;
}


export class PostRetrieveEnvironmentInfoHeaders extends SpeakeasyBase {
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


export class PostRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRetrieveEnvironmentInfoQueryParams;

  @Metadata()
  headers: PostRetrieveEnvironmentInfoHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
