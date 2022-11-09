import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinkAttributesHeaders extends SpeakeasyBase {
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

export enum GetLinkAttributesRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE"
,    Eventual = "EVENTUAL"
}


// GetLinkAttributesRequestBodyTypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class GetLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues?: shared.AttributeNameAndValue[];

  @Metadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference?: shared.ObjectReference;

  @Metadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference?: shared.ObjectReference;

  @Metadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}


export class GetLinkAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @Metadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: GetLinkAttributesRequestBodyConsistencyLevelEnum;

  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: GetLinkAttributesRequestBodyTypedLinkSpecifier;
}


export class GetLinkAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLinkAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetLinkAttributesRequestBody;
}


export class GetLinkAttributesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotEnabledException?: any;

  @Metadata()
  facetValidationException?: any;

  @Metadata()
  getLinkAttributesResponse?: shared.GetLinkAttributesResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
