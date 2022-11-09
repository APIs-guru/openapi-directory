import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeploymentTargetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;
}
