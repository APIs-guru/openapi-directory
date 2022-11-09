import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentArn" })
  deploymentArn?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;
}
