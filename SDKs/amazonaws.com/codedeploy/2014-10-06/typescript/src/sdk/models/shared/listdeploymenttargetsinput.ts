import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDeploymentTargetsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=targetFilters" })
  targetFilters?: Map<string, string[]>;
}
