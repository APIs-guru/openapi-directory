import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePolicyXAmzTargetEnum {
    Awsfms20180101DeletePolicy = "AWSFMS_20180101.DeletePolicy"
}
export declare class DeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePolicyXAmzTargetEnum;
}
export declare class DeletePolicyRequest extends SpeakeasyBase {
    headers: DeletePolicyHeaders;
    request: shared.DeletePolicyRequest;
}
export declare class DeletePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
