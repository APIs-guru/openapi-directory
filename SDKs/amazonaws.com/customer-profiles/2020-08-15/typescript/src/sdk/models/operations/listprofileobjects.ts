import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListProfileObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class ListProfileObjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;
}


export class ListProfileObjectsHeaders extends SpeakeasyBase {
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


// ListProfileObjectsRequestBodyObjectFilter
/** 
 * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
**/
export class ListProfileObjectsRequestBodyObjectFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}


export class ListProfileObjectsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectFilter" })
  objectFilter?: ListProfileObjectsRequestBodyObjectFilter;

  @SpeakeasyMetadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId: string;
}


export class ListProfileObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListProfileObjectsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListProfileObjectsQueryParams;

  @SpeakeasyMetadata()
  headers: ListProfileObjectsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListProfileObjectsRequestBody;
}


export class ListProfileObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listProfileObjectsResponse?: shared.ListProfileObjectsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
