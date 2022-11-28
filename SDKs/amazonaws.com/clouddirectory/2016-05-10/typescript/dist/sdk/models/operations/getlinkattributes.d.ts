import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinkAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare enum GetLinkAttributesRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export declare class GetLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
    identityAttributeValues?: shared.AttributeNameAndValue[];
    sourceObjectReference?: shared.ObjectReference;
    targetObjectReference?: shared.ObjectReference;
    typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}
export declare class GetLinkAttributesRequestBody extends SpeakeasyBase {
    attributeNames: string[];
    consistencyLevel?: GetLinkAttributesRequestBodyConsistencyLevelEnum;
    typedLinkSpecifier: GetLinkAttributesRequestBodyTypedLinkSpecifier;
}
export declare class GetLinkAttributesRequest extends SpeakeasyBase {
    headers: GetLinkAttributesHeaders;
    request: GetLinkAttributesRequestBody;
}
export declare class GetLinkAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    getLinkAttributesResponse?: shared.GetLinkAttributesResponse;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
