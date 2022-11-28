import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class GetObjectAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: GetObjectAttributesXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class GetObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * A facet.
**/
export declare class GetObjectAttributesRequestBodySchemaFacet extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
export declare class GetObjectAttributesRequestBody extends SpeakeasyBase {
    attributeNames: string[];
    objectReference: GetObjectAttributesRequestBodyObjectReference;
    schemaFacet: GetObjectAttributesRequestBodySchemaFacet;
}
export declare class GetObjectAttributesRequest extends SpeakeasyBase {
    headers: GetObjectAttributesHeaders;
    request: GetObjectAttributesRequestBody;
}
export declare class GetObjectAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    getObjectAttributesResponse?: shared.GetObjectAttributesResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
