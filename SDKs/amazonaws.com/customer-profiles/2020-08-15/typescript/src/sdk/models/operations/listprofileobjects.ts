import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProfileObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class ListProfileObjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;
}


export class ListProfileObjectsHeaders extends SpeakeasyBase {
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


// ListProfileObjectsRequestBodyObjectFilter
/** 
 * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
**/
export class ListProfileObjectsRequestBodyObjectFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyName" })
  keyName?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}


export class ListProfileObjectsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectFilter" })
  objectFilter?: ListProfileObjectsRequestBodyObjectFilter;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=ProfileId" })
  profileId: string;
}


export class ListProfileObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListProfileObjectsPathParams;

  @Metadata()
  queryParams: ListProfileObjectsQueryParams;

  @Metadata()
  headers: ListProfileObjectsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListProfileObjectsRequestBody;
}


export class ListProfileObjectsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listProfileObjectsResponse?: shared.ListProfileObjectsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
