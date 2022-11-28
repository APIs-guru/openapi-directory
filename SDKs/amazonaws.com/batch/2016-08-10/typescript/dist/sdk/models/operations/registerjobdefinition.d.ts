import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
export declare class RegisterJobDefinitionRequestBodyContainerProperties extends SpeakeasyBase {
    command?: string[];
    environment?: shared.KeyValuePair[];
    executionRoleArn?: string;
    fargatePlatformConfiguration?: shared.FargatePlatformConfiguration;
    image?: string;
    instanceType?: string;
    jobRoleArn?: string;
    linuxParameters?: shared.LinuxParameters;
    logConfiguration?: shared.LogConfiguration;
    memory?: number;
    mountPoints?: shared.MountPoint[];
    networkConfiguration?: shared.NetworkConfiguration;
    privileged?: boolean;
    readonlyRootFilesystem?: boolean;
    resourceRequirements?: shared.ResourceRequirement[];
    secrets?: shared.Secret[];
    ulimits?: shared.Ulimit[];
    user?: string;
    vcpus?: number;
    volumes?: shared.Volume[];
}
/**
 * An object representing the node properties of a multi-node parallel job.
**/
export declare class RegisterJobDefinitionRequestBodyNodeProperties extends SpeakeasyBase {
    mainNode?: number;
    nodeRangeProperties?: shared.NodeRangeProperty[];
    numNodes?: number;
}
/**
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export declare class RegisterJobDefinitionRequestBodyRetryStrategy extends SpeakeasyBase {
    attempts?: number;
    evaluateOnExit?: shared.EvaluateOnExit[];
}
/**
 * An object representing a job timeout configuration.
**/
export declare class RegisterJobDefinitionRequestBodyTimeout extends SpeakeasyBase {
    attemptDurationSeconds?: number;
}
export declare enum RegisterJobDefinitionRequestBodyTypeEnum {
    Container = "container",
    Multinode = "multinode"
}
export declare class RegisterJobDefinitionRequestBody extends SpeakeasyBase {
    containerProperties?: RegisterJobDefinitionRequestBodyContainerProperties;
    jobDefinitionName: string;
    nodeProperties?: RegisterJobDefinitionRequestBodyNodeProperties;
    parameters?: Map<string, string>;
    platformCapabilities?: shared.PlatformCapabilityEnum[];
    propagateTags?: boolean;
    retryStrategy?: RegisterJobDefinitionRequestBodyRetryStrategy;
    tags?: Map<string, string>;
    timeout?: RegisterJobDefinitionRequestBodyTimeout;
    type: RegisterJobDefinitionRequestBodyTypeEnum;
}
export declare class RegisterJobDefinitionRequest extends SpeakeasyBase {
    headers: RegisterJobDefinitionHeaders;
    request: RegisterJobDefinitionRequestBody;
}
export declare class RegisterJobDefinitionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    registerJobDefinitionResponse?: shared.RegisterJobDefinitionResponse;
    serverException?: any;
    statusCode: number;
}
