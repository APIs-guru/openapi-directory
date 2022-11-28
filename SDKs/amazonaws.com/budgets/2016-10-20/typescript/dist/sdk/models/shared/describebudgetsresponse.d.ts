import { SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";
/**
 *  Response of DescribeBudgets
**/
export declare class DescribeBudgetsResponse extends SpeakeasyBase {
    budgets?: Budget[];
    nextToken?: string;
}
