import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetObjectInformationXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class GetObjectInformationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: GetObjectInformationXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class GetObjectInformationRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class GetObjectInformationRequestBody extends SpeakeasyBase {
    objectReference: GetObjectInformationRequestBodyObjectReference;
}
export declare class GetObjectInformationRequest extends SpeakeasyBase {
    headers: GetObjectInformationHeaders;
    request: GetObjectInformationRequestBody;
}
export declare class GetObjectInformationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    getObjectInformationResponse?: shared.GetObjectInformationResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
