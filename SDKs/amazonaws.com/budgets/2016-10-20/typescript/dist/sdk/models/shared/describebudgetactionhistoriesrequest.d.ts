import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
export declare class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
    accountId: string;
    actionId: string;
    budgetName: string;
    maxResults?: number;
    nextToken?: string;
    timePeriod?: TimePeriod;
}
