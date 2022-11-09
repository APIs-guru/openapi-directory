import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;
}
