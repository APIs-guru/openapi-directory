import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSummary } from "./buildsummary";



// BuildGroup
/** 
 * Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
**/
export class BuildGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentBuildSummary" })
  currentBuildSummary?: BuildSummary;

  @SpeakeasyMetadata({ data: "json, name=dependsOn" })
  dependsOn?: string[];

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreFailure" })
  ignoreFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priorBuildSummaryList", elemType: BuildSummary })
  priorBuildSummaryList?: BuildSummary[];
}
