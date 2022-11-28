import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing an Batch array job.
**/
export declare class SubmitJobRequestBodyArrayProperties extends SpeakeasyBase {
    size?: number;
}
/**
 * The overrides that should be sent to a container.
**/
export declare class SubmitJobRequestBodyContainerOverrides extends SpeakeasyBase {
    command?: string[];
    environment?: shared.KeyValuePair[];
    instanceType?: string;
    memory?: number;
    resourceRequirements?: shared.ResourceRequirement[];
    vcpus?: number;
}
/**
 * <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
**/
export declare class SubmitJobRequestBodyNodeOverrides extends SpeakeasyBase {
    nodePropertyOverrides?: shared.NodePropertyOverride[];
    numNodes?: number;
}
/**
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export declare class SubmitJobRequestBodyRetryStrategy extends SpeakeasyBase {
    attempts?: number;
    evaluateOnExit?: shared.EvaluateOnExit[];
}
/**
 * An object representing a job timeout configuration.
**/
export declare class SubmitJobRequestBodyTimeout extends SpeakeasyBase {
    attemptDurationSeconds?: number;
}
export declare class SubmitJobRequestBody extends SpeakeasyBase {
    arrayProperties?: SubmitJobRequestBodyArrayProperties;
    containerOverrides?: SubmitJobRequestBodyContainerOverrides;
    dependsOn?: shared.JobDependency[];
    jobDefinition: string;
    jobName: string;
    jobQueue: string;
    nodeOverrides?: SubmitJobRequestBodyNodeOverrides;
    parameters?: Map<string, string>;
    propagateTags?: boolean;
    retryStrategy?: SubmitJobRequestBodyRetryStrategy;
    tags?: Map<string, string>;
    timeout?: SubmitJobRequestBodyTimeout;
}
export declare class SubmitJobRequest extends SpeakeasyBase {
    headers: SubmitJobHeaders;
    request: SubmitJobRequestBody;
}
export declare class SubmitJobResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    submitJobResponse?: shared.SubmitJobResponse;
}
