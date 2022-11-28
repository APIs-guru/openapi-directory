import { SpeakeasyBase } from "../../../internal/utils";
import { Criterion } from "./criterion";
/**
 * Contains information about an archive rule.
**/
export declare class ArchiveRuleSummary extends SpeakeasyBase {
    createdAt: Date;
    filter: Map<string, Criterion>;
    ruleName: string;
    updatedAt: Date;
}
