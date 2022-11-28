import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachPolicyHeaders extends SpeakeasyBase {
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
export declare class AttachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class AttachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachPolicyRequestBody extends SpeakeasyBase {
    objectReference: AttachPolicyRequestBodyObjectReference;
    policyReference: AttachPolicyRequestBodyPolicyReference;
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    headers: AttachPolicyHeaders;
    request: AttachPolicyRequestBody;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    attachPolicyResponse?: Map<string, any>;
    contentType: string;
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
