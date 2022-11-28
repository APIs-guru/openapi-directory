import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPolicyXAmzTargetEnum {
    Awsfms20180101GetPolicy = "AWSFMS_20180101.GetPolicy"
}
export declare class GetPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPolicyXAmzTargetEnum;
}
export declare class GetPolicyRequest extends SpeakeasyBase {
    headers: GetPolicyHeaders;
    request: shared.GetPolicyRequest;
}
export declare class GetPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getPolicyResponse?: shared.GetPolicyResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidTypeException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
