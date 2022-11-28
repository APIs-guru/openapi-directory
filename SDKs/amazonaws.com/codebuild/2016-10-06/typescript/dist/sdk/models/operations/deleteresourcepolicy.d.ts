import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    CodeBuild20161006DeleteResourcePolicy = "CodeBuild_20161006.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    headers: DeleteResourcePolicyHeaders;
    request: shared.DeleteResourcePolicyInput;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourcePolicyOutput?: Map<string, any>;
    invalidInputException?: any;
    statusCode: number;
}
