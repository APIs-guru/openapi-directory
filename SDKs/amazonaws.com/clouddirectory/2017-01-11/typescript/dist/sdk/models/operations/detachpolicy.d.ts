import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachPolicyHeaders extends SpeakeasyBase {
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
export declare class DetachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class DetachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachPolicyRequestBody extends SpeakeasyBase {
    objectReference: DetachPolicyRequestBodyObjectReference;
    policyReference: DetachPolicyRequestBodyPolicyReference;
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    headers: DetachPolicyHeaders;
    request: DetachPolicyRequestBody;
}
export declare class DetachPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detachPolicyResponse?: Map<string, any>;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    notPolicyException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
