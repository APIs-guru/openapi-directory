import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;
}
