import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Spend } from "./spend";
import { BudgetTypeEnum } from "./budgettypeenum";
import { CalculatedSpend } from "./calculatedspend";
import { CostTypes } from "./costtypes";
import { TimePeriod } from "./timeperiod";
import { TimeUnitEnum } from "./timeunitenum";



// Budget
/** 
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
**/
export class Budget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BudgetLimit" })
  budgetLimit?: Spend;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetType" })
  budgetType: BudgetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculatedSpend" })
  calculatedSpend?: CalculatedSpend;

  @SpeakeasyMetadata({ data: "json, name=CostFilters" })
  costFilters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=CostTypes" })
  costTypes?: CostTypes;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PlannedBudgetLimits", elemType: Spend })
  plannedBudgetLimits?: Map<string, Spend>;

  @SpeakeasyMetadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;

  @SpeakeasyMetadata({ data: "json, name=TimeUnit" })
  timeUnit: TimeUnitEnum;
}
