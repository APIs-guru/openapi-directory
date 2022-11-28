import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetPerformanceHistory } from "./budgetperformancehistory";



export class DescribeBudgetPerformanceHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BudgetPerformanceHistory" })
  budgetPerformanceHistory?: BudgetPerformanceHistory;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
