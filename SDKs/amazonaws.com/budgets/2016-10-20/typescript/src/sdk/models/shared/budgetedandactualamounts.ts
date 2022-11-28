import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Spend } from "./spend";
import { TimePeriod } from "./timeperiod";



// BudgetedAndActualAmounts
/** 
 * The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
**/
export class BudgetedAndActualAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualAmount" })
  actualAmount?: Spend;

  @SpeakeasyMetadata({ data: "json, name=BudgetedAmount" })
  budgetedAmount?: Spend;

  @SpeakeasyMetadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;
}
