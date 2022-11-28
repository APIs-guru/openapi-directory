import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDeploymentTargetsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFilters" })
  targetFilters?: Map<string, string[]>;
}
