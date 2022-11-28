import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionConfiguration } from "./actionconfiguration";
import { ActionTypeId } from "./actiontypeid";
import { AwsSessionCredentials } from "./awssessioncredentials";
import { EncryptionKey } from "./encryptionkey";
import { Artifact } from "./artifact";
import { PipelineContext } from "./pipelinecontext";



// ThirdPartyJobData
/** 
 * Represents information about the job data for a partner action.
**/
export class ThirdPartyJobData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionConfiguration" })
  actionConfiguration?: ActionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=actionTypeId" })
  actionTypeId?: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=artifactCredentials" })
  artifactCredentials?: AwsSessionCredentials;

  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=inputArtifacts", elemType: Artifact })
  inputArtifacts?: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=outputArtifacts", elemType: Artifact })
  outputArtifacts?: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=pipelineContext" })
  pipelineContext?: PipelineContext;
}
