import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class SearchProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;
}


export class SearchProfilesHeaders extends SpeakeasyBase {
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


export class SearchProfilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyName" })
  keyName: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}


export class SearchProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchProfilesPathParams;

  @Metadata()
  queryParams: SearchProfilesQueryParams;

  @Metadata()
  headers: SearchProfilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SearchProfilesRequestBody;
}


export class SearchProfilesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchProfilesResponse?: shared.SearchProfilesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
