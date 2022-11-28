import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { AwsSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { Artifact } from "./artifact";
import { PipelineContext } from "./pipelinecontext";
/**
 * Represents other information about a job required for a job worker to complete the job.
**/
export declare class JobData extends SpeakeasyBase {
    actionConfiguration?: ActionConfiguration;
    actionTypeId?: ActionTypeId;
    artifactCredentials?: AwsSessionCredentials;
    continuationToken?: string;
    encryptionKey?: EncryptionKey;
    inputArtifacts?: Artifact[];
    outputArtifacts?: Artifact[];
    pipelineContext?: PipelineContext;
}
