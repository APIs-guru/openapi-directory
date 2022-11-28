import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
export declare class DescribeBudgetPerformanceHistoryRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    maxResults?: number;
    nextToken?: string;
    timePeriod?: TimePeriod;
}
