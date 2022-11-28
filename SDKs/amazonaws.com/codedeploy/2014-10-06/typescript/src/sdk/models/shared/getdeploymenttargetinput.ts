import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeploymentTargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;
}
