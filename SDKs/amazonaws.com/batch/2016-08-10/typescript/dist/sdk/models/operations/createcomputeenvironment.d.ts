import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateComputeEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
export declare class CreateComputeEnvironmentRequestBodyComputeResources extends SpeakeasyBase {
    allocationStrategy?: shared.CrAllocationStrategyEnum;
    bidPercentage?: number;
    desiredvCpus?: number;
    ec2Configuration?: shared.Ec2Configuration[];
    ec2KeyPair?: string;
    imageId?: string;
    instanceRole?: string;
    instanceTypes?: string[];
    launchTemplate?: shared.LaunchTemplateSpecification;
    maxvCpus?: number;
    minvCpus?: number;
    placementGroup?: string;
    securityGroupIds?: string[];
    spotIamFleetRole?: string;
    subnets?: string[];
    tags?: Map<string, string>;
    type?: shared.CrTypeEnum;
}
export declare enum CreateComputeEnvironmentRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum CreateComputeEnvironmentRequestBodyTypeEnum {
    Managed = "MANAGED",
    Unmanaged = "UNMANAGED"
}
export declare class CreateComputeEnvironmentRequestBody extends SpeakeasyBase {
    computeEnvironmentName: string;
    computeResources?: CreateComputeEnvironmentRequestBodyComputeResources;
    serviceRole?: string;
    state?: CreateComputeEnvironmentRequestBodyStateEnum;
    tags?: Map<string, string>;
    type: CreateComputeEnvironmentRequestBodyTypeEnum;
}
export declare class CreateComputeEnvironmentRequest extends SpeakeasyBase {
    headers: CreateComputeEnvironmentHeaders;
    request: CreateComputeEnvironmentRequestBody;
}
export declare class CreateComputeEnvironmentResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createComputeEnvironmentResponse?: shared.CreateComputeEnvironmentResponse;
    serverException?: any;
    statusCode: number;
}
