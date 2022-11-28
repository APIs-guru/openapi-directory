import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetDeploymentTargetsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetIds" })
  targetIds?: string[];
}
