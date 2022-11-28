import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourcePolicyXAmzTargetEnum {
    CodeBuild20161006PutResourcePolicy = "CodeBuild_20161006.PutResourcePolicy"
}
export declare class PutResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    headers: PutResourcePolicyHeaders;
    request: shared.PutResourcePolicyInput;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    putResourcePolicyOutput?: shared.PutResourcePolicyOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
