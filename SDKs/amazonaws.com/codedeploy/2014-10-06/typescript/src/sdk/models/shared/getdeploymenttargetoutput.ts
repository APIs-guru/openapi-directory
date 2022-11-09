import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentTarget } from "./deploymenttarget";


export class GetDeploymentTargetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentTarget" })
  deploymentTarget?: DeploymentTarget;
}
