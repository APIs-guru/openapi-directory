import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateObjectAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class UpdateObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class UpdateObjectAttributesRequestBody extends SpeakeasyBase {
    attributeUpdates: shared.ObjectAttributeUpdate[];
    objectReference: UpdateObjectAttributesRequestBodyObjectReference;
}
export declare class UpdateObjectAttributesRequest extends SpeakeasyBase {
    headers: UpdateObjectAttributesHeaders;
    request: UpdateObjectAttributesRequestBody;
}
export declare class UpdateObjectAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    linkNameAlreadyInUseException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    updateObjectAttributesResponse?: shared.UpdateObjectAttributesResponse;
    validationException?: any;
}
