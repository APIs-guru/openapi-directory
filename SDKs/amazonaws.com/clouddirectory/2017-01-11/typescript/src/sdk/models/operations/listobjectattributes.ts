import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListObjectAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}


export class ListObjectAttributesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" })
  xAmzConsistencyLevel?: ListObjectAttributesXAmzConsistencyLevelEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


// ListObjectAttributesRequestBodyFacetFilter
/** 
 * A facet.
**/
export class ListObjectAttributesRequestBodyFacetFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetName" })
  facetName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}


// ListObjectAttributesRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class ListObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListObjectAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetFilter" })
  facetFilter?: ListObjectAttributesRequestBodyFacetFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ListObjectAttributesRequestBodyObjectReference;
}


export class ListObjectAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListObjectAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: ListObjectAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListObjectAttributesRequestBody;
}


export class ListObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: any;

  @SpeakeasyMetadata()
  facetValidationException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  listObjectAttributesResponse?: shared.ListObjectAttributesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
