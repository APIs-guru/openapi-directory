import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResourcePolicyXAmzTargetEnum {
    CodeBuild20161006GetResourcePolicy = "CodeBuild_20161006.GetResourcePolicy"
}
export declare class GetResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    headers: GetResourcePolicyHeaders;
    request: shared.GetResourcePolicyInput;
}
export declare class GetResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    getResourcePolicyOutput?: shared.GetResourcePolicyOutput;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
