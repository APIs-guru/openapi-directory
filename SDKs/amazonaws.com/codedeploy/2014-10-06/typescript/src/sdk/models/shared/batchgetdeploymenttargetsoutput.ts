import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTarget } from "./deploymenttarget";



export class BatchGetDeploymentTargetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentTargets", elemType: DeploymentTarget })
  deploymentTargets?: DeploymentTarget[];
}
