import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Spend } from "./spend";
import { BudgetTypeEnum } from "./budgettypeenum";
import { CalculatedSpend } from "./calculatedspend";
import { CostTypes } from "./costtypes";
import { Spend } from "./spend";
import { TimePeriod } from "./timeperiod";
import { TimeUnitEnum } from "./timeunitenum";


// Budget
/** 
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
**/
export class Budget extends SpeakeasyBase {
  @Metadata({ data: "json, name=BudgetLimit" })
  budgetLimit?: Spend;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=BudgetType" })
  budgetType: BudgetTypeEnum;

  @Metadata({ data: "json, name=CalculatedSpend" })
  calculatedSpend?: CalculatedSpend;

  @Metadata({ data: "json, name=CostFilters" })
  costFilters?: Map<string, string[]>;

  @Metadata({ data: "json, name=CostTypes" })
  costTypes?: CostTypes;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=PlannedBudgetLimits", elemType: shared.Spend })
  plannedBudgetLimits?: Map<string, Spend>;

  @Metadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;

  @Metadata({ data: "json, name=TimeUnit" })
  timeUnit: TimeUnitEnum;
}
