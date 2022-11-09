import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentTarget } from "./deploymenttarget";


export class BatchGetDeploymentTargetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentTargets", elemType: shared.DeploymentTarget })
  deploymentTargets?: DeploymentTarget[];
}
