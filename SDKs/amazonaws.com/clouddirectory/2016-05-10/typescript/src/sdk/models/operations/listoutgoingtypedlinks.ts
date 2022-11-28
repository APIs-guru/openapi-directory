import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOutgoingTypedLinksHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}

export enum ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}


// ListOutgoingTypedLinksRequestBodyFilterTypedLink
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class ListOutgoingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


// ListOutgoingTypedLinksRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class ListOutgoingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListOutgoingTypedLinksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange })
  filterAttributeRanges?: shared.TypedLinkAttributeRange[];

  @SpeakeasyMetadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: ListOutgoingTypedLinksRequestBodyFilterTypedLink;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ListOutgoingTypedLinksRequestBodyObjectReference;
}


export class ListOutgoingTypedLinksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListOutgoingTypedLinksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListOutgoingTypedLinksRequestBody;
}


export class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  @SpeakeasyMetadata()
  invalidNextTokenException?: shared.InvalidNextTokenException;

  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  @SpeakeasyMetadata()
  listOutgoingTypedLinksResponse?: shared.ListOutgoingTypedLinksResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
