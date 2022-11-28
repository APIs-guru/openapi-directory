import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";



export class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;
}
