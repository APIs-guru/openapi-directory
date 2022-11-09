import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Spend } from "./spend";
import { Spend } from "./spend";
import { TimePeriod } from "./timeperiod";


// BudgetedAndActualAmounts
/** 
 * The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
**/
export class BudgetedAndActualAmounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualAmount" })
  actualAmount?: Spend;

  @Metadata({ data: "json, name=BudgetedAmount" })
  budgetedAmount?: Spend;

  @Metadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;
}
