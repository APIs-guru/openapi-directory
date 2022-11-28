import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSummary } from "./buildsummary";
/**
 * Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
**/
export declare class BuildGroup extends SpeakeasyBase {
    currentBuildSummary?: BuildSummary;
    dependsOn?: string[];
    identifier?: string;
    ignoreFailure?: boolean;
    priorBuildSummaryList?: BuildSummary[];
}
