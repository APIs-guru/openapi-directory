import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
import { ResolvedArtifact } from "./resolvedartifact";
/**
 * Contains summary information about a batch build group.
**/
export declare class BuildSummary extends SpeakeasyBase {
    arn?: string;
    buildStatus?: StatusTypeEnum;
    primaryArtifact?: ResolvedArtifact;
    requestedOn?: Date;
    secondaryArtifacts?: ResolvedArtifact[];
}
