import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinkAttributesHeaders extends SpeakeasyBase {
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

export enum GetLinkAttributesRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}


// GetLinkAttributesRequestBodyTypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class GetLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues?: shared.AttributeNameAndValue[];

  @SpeakeasyMetadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference?: shared.ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}


export class GetLinkAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @SpeakeasyMetadata({ data: "json, name=ConsistencyLevel" })
  consistencyLevel?: GetLinkAttributesRequestBodyConsistencyLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier: GetLinkAttributesRequestBodyTypedLinkSpecifier;
}


export class GetLinkAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetLinkAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetLinkAttributesRequestBody;
}


export class GetLinkAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryNotEnabledException?: any;

  @SpeakeasyMetadata()
  facetValidationException?: any;

  @SpeakeasyMetadata()
  getLinkAttributesResponse?: shared.GetLinkAttributesResponse;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
