import { SpeakeasyBase } from "../../../internal/utils";
import { BatchRestrictions } from "./batchrestrictions";
/**
 * Contains configuration information about a batch build project.
**/
export declare class ProjectBuildBatchConfig extends SpeakeasyBase {
    combineArtifacts?: boolean;
    restrictions?: BatchRestrictions;
    serviceRole?: string;
    timeoutInMins?: number;
}
