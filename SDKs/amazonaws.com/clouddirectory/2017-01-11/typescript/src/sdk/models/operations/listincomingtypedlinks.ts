import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListIncomingTypedLinksHeaders extends SpeakeasyBase {
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

export enum ListIncomingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE"
,    Eventual = "EVENTUAL"
}


// ListIncomingTypedLinksRequestBodyFilterTypedLink
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class ListIncomingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


// ListIncomingTypedLinksRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class ListIncomingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListIncomingTypedLinksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;

  @Metadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange })
  filterAttributeRanges?: shared.TypedLinkAttributeRange[];

  @Metadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: ListIncomingTypedLinksRequestBodyFilterTypedLink;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ListIncomingTypedLinksRequestBodyObjectReference;
}


export class ListIncomingTypedLinksRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListIncomingTypedLinksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListIncomingTypedLinksRequestBody;
}


export class ListIncomingTypedLinksResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listIncomingTypedLinksResponse?: shared.ListIncomingTypedLinksResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
