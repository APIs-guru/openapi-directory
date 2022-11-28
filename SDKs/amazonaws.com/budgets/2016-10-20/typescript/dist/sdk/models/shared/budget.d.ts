import { SpeakeasyBase } from "../../../internal/utils";
import { Spend } from "./spend";
import { BudgetTypeEnum } from "./budgettypeenum";
import { CalculatedSpend } from "./calculatedspend";
import { CostTypes } from "./costtypes";
import { TimePeriod } from "./timeperiod";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
**/
export declare class Budget extends SpeakeasyBase {
    budgetLimit?: Spend;
    budgetName: string;
    budgetType: BudgetTypeEnum;
    calculatedSpend?: CalculatedSpend;
    costFilters?: Map<string, string[]>;
    costTypes?: CostTypes;
    lastUpdatedTime?: Date;
    plannedBudgetLimits?: Map<string, Spend>;
    timePeriod?: TimePeriod;
    timeUnit: TimeUnitEnum;
}
