import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingEnum } from "./findingenum";
import { ReasonCodeSummary } from "./reasoncodesummary";
/**
 * The summary of a recommendation.
**/
export declare class Summary extends SpeakeasyBase {
    name?: FindingEnum;
    reasonCodeSummaries?: ReasonCodeSummary[];
    value?: number;
}
