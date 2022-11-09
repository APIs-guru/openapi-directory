import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BudgetPerformanceHistory } from "./budgetperformancehistory";


export class DescribeBudgetPerformanceHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BudgetPerformanceHistory" })
  budgetPerformanceHistory?: BudgetPerformanceHistory;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
