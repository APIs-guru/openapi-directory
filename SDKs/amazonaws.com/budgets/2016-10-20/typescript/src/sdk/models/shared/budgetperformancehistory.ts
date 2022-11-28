import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetTypeEnum } from "./budgettypeenum";
import { BudgetedAndActualAmounts } from "./budgetedandactualamounts";
import { CostTypes } from "./costtypes";
import { TimeUnitEnum } from "./timeunitenum";



// BudgetPerformanceHistory
/** 
 * A history of the state of a budget at the end of the budget's specified time period.
**/
export class BudgetPerformanceHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName?: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetType" })
  budgetType?: BudgetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=BudgetedAndActualAmountsList", elemType: BudgetedAndActualAmounts })
  budgetedAndActualAmountsList?: BudgetedAndActualAmounts[];

  @SpeakeasyMetadata({ data: "json, name=CostFilters" })
  costFilters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=CostTypes" })
  costTypes?: CostTypes;

  @SpeakeasyMetadata({ data: "json, name=TimeUnit" })
  timeUnit?: TimeUnitEnum;
}
