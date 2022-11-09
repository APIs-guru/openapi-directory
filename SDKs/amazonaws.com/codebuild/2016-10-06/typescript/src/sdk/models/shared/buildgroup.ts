import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSummary } from "./buildsummary";
import { BuildSummary } from "./buildsummary";


// BuildGroup
/** 
 * Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
**/
export class BuildGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentBuildSummary" })
  currentBuildSummary?: BuildSummary;

  @Metadata({ data: "json, name=dependsOn" })
  dependsOn?: string[];

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=ignoreFailure" })
  ignoreFailure?: boolean;

  @Metadata({ data: "json, name=priorBuildSummaryList", elemType: shared.BuildSummary })
  priorBuildSummaryList?: BuildSummary[];
}
