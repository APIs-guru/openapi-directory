import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetTypeEnum } from "./budgettypeenum";
import { BudgetedAndActualAmounts } from "./budgetedandactualamounts";
import { CostTypes } from "./costtypes";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * A history of the state of a budget at the end of the budget's specified time period.
**/
export declare class BudgetPerformanceHistory extends SpeakeasyBase {
    budgetName?: string;
    budgetType?: BudgetTypeEnum;
    budgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
    costFilters?: Map<string, string[]>;
    costTypes?: CostTypes;
    timeUnit?: TimeUnitEnum;
}
