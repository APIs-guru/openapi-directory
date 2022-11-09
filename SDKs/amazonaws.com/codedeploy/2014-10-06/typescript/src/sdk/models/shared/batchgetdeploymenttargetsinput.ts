import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetDeploymentTargetsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=targetIds" })
  targetIds?: string[];
}
