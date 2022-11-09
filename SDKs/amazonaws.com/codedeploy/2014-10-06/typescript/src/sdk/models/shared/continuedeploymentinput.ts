import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentWaitTypeEnum } from "./deploymentwaittypeenum";


export class ContinueDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=deploymentWaitType" })
  deploymentWaitType?: DeploymentWaitTypeEnum;
}
