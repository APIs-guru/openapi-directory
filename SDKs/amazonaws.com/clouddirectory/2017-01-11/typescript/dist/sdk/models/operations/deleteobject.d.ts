import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteObjectHeaders extends SpeakeasyBase {
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
export declare class DeleteObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DeleteObjectRequestBody extends SpeakeasyBase {
    objectReference: DeleteObjectRequestBodyObjectReference;
}
export declare class DeleteObjectRequest extends SpeakeasyBase {
    headers: DeleteObjectHeaders;
    request: DeleteObjectRequestBody;
}
export declare class DeleteObjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteObjectResponse?: Map<string, any>;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    objectNotDetachedException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
