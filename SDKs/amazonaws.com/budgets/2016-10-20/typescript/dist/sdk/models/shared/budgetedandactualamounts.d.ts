import { SpeakeasyBase } from "../../../internal/utils";
import { Spend } from "./spend";
import { TimePeriod } from "./timeperiod";
/**
 * The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
**/
export declare class BudgetedAndActualAmounts extends SpeakeasyBase {
    actualAmount?: Spend;
    budgetedAmount?: Spend;
    timePeriod?: TimePeriod;
}
