import { SpeakeasyBase } from "../../../internal/utils";
import { ArchiveRuleSummary } from "./archiverulesummary";
/**
 * The response to the request.
**/
export declare class ListArchiveRulesResponse extends SpeakeasyBase {
    archiveRules: ArchiveRuleSummary[];
    nextToken?: string;
}
