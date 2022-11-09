import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetTypeEnum } from "./budgettypeenum";
import { BudgetedAndActualAmounts } from "./budgetedandactualamounts";
import { CostTypes } from "./costtypes";
import { TimeUnitEnum } from "./timeunitenum";


// BudgetPerformanceHistory
/** 
 * A history of the state of a budget at the end of the budget's specified time period.
**/
export class BudgetPerformanceHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=BudgetName" })
  budgetName?: string;

  @Metadata({ data: "json, name=BudgetType" })
  budgetType?: BudgetTypeEnum;

  @Metadata({ data: "json, name=BudgetedAndActualAmountsList", elemType: shared.BudgetedAndActualAmounts })
  budgetedAndActualAmountsList?: BudgetedAndActualAmounts[];

  @Metadata({ data: "json, name=CostFilters" })
  costFilters?: Map<string, string[]>;

  @Metadata({ data: "json, name=CostTypes" })
  costTypes?: CostTypes;

  @Metadata({ data: "json, name=TimeUnit" })
  timeUnit?: TimeUnitEnum;
}
