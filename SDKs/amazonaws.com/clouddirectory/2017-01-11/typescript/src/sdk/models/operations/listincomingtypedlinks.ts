import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListIncomingTypedLinksHeaders extends SpeakeasyBase {
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

export enum ListIncomingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}


// ListIncomingTypedLinksRequestBodyFilterTypedLink
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class ListIncomingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkName" })
  typedLinkName?: string;
}


// ListIncomingTypedLinksRequestBodyObjectReference
/** 
 * The reference that identifies an object.
**/
export class ListIncomingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}


export class ListIncomingTypedLinksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange })
  filterAttributeRanges?: shared.TypedLinkAttributeRange[];

  @SpeakeasyMetadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: ListIncomingTypedLinksRequestBodyFilterTypedLink;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ListIncomingTypedLinksRequestBodyObjectReference;
}


export class ListIncomingTypedLinksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListIncomingTypedLinksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListIncomingTypedLinksRequestBody;
}


export class ListIncomingTypedLinksResponse extends SpeakeasyBase {
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
  listIncomingTypedLinksResponse?: shared.ListIncomingTypedLinksResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
