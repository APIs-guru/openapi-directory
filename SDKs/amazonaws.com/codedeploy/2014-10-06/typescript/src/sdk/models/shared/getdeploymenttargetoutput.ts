import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTarget } from "./deploymenttarget";



export class GetDeploymentTargetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentTarget" })
  deploymentTarget?: DeploymentTarget;
}
