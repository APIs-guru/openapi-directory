import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutPolicyXAmzTargetEnum {
    Awsfms20180101PutPolicy = "AWSFMS_20180101.PutPolicy"
}
export declare class PutPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPolicyXAmzTargetEnum;
}
export declare class PutPolicyRequest extends SpeakeasyBase {
    headers: PutPolicyHeaders;
    request: shared.PutPolicyRequest;
}
export declare class PutPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    invalidTypeException?: any;
    limitExceededException?: any;
    putPolicyResponse?: shared.PutPolicyResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
