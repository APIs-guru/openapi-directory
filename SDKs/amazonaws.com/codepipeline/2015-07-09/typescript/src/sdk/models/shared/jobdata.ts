import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { AwsSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { Artifact } from "./artifact";
import { Artifact } from "./artifact";
import { PipelineContext } from "./pipelinecontext";


// JobData
/** 
 * Represents other information about a job required for a job worker to complete the job.
**/
export class JobData extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionConfiguration" })
  actionConfiguration?: ActionConfiguration;

  @Metadata({ data: "json, name=actionTypeId" })
  actionTypeId?: ActionTypeId;

  @Metadata({ data: "json, name=artifactCredentials" })
  artifactCredentials?: AwsSessionCredentials;

  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=inputArtifacts", elemType: shared.Artifact })
  inputArtifacts?: Artifact[];

  @Metadata({ data: "json, name=outputArtifacts", elemType: shared.Artifact })
  outputArtifacts?: Artifact[];

  @Metadata({ data: "json, name=pipelineContext" })
  pipelineContext?: PipelineContext;
}
