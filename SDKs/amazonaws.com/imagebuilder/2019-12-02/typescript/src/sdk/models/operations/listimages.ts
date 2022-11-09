import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListImagesHeaders extends SpeakeasyBase {
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

export enum ListImagesRequestBodyOwnerEnum {
    Self = "Self"
,    Shared = "Shared"
,    Amazon = "Amazon"
}


export class ListImagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=byName" })
  byName?: boolean;

  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: shared.Filter[];

  @Metadata({ data: "json, name=includeDeprecated" })
  includeDeprecated?: boolean;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: ListImagesRequestBodyOwnerEnum;
}


export class ListImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListImagesQueryParams;

  @Metadata()
  headers: ListImagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListImagesRequestBody;
}


export class ListImagesResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listImagesResponse?: shared.ListImagesResponse;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
