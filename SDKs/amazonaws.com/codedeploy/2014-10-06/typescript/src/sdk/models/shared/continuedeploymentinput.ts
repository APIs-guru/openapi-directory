import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentWaitTypeEnum } from "./deploymentwaittypeenum";



export class ContinueDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentWaitType" })
  deploymentWaitType?: DeploymentWaitTypeEnum;
}
