import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOutgoingTypedLinksHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}

export enum ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE"
,    Eventual = "EVENTUAL"
}


// ListOutgoingTypedLinksRequestBodyFilterTypedLink
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class ListOutgoingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


// ListOutgoingTypedLinksRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class ListOutgoingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListOutgoingTypedLinksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;

  @Metadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange })
  filterAttributeRanges?: shared.TypedLinkAttributeRange[];

  @Metadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: ListOutgoingTypedLinksRequestBodyFilterTypedLink;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ListOutgoingTypedLinksRequestBodyObjectReference;
}


export class ListOutgoingTypedLinksRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListOutgoingTypedLinksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListOutgoingTypedLinksRequestBody;
}


export class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  @Metadata()
  facetValidationException?: shared.FacetValidationException;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  invalidNextTokenException?: shared.InvalidNextTokenException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  listOutgoingTypedLinksResponse?: shared.ListOutgoingTypedLinksResponse;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
