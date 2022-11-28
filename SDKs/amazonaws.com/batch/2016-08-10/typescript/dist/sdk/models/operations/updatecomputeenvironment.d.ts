import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateComputeEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export declare class UpdateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
    desiredvCpus?: number;
    maxvCpus?: number;
    minvCpus?: number;
    securityGroupIds?: string[];
    subnets?: string[];
}
export declare enum UpdateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateComputeEnvironmentRequestBody extends SpeakeasyBase {
    computeEnvironment: string;
    computeResources?: UpdateComputeEnvironmentRequestBodyComputeResources;
    serviceRole?: string;
    state?: UpdateComputeEnvironmentRequestBodyStateEnum;
}
export declare class UpdateComputeEnvironmentRequest extends SpeakeasyBase {
    headers: UpdateComputeEnvironmentHeaders;
    request: UpdateComputeEnvironmentRequestBody;
}
export declare class UpdateComputeEnvironmentResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    updateComputeEnvironmentResponse?: shared.UpdateComputeEnvironmentResponse;
}
