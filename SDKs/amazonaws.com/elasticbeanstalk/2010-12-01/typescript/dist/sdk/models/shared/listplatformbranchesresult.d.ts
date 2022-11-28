import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformBranchSummary } from "./platformbranchsummary";
export declare class ListPlatformBranchesResult extends SpeakeasyBase {
    nextToken?: string;
    platformBranchSummaryList?: PlatformBranchSummary[];
}
