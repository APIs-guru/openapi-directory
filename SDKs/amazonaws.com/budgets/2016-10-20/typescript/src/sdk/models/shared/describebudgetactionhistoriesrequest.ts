import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimePeriod } from "./timeperiod";


export class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ActionId" })
  actionId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TimePeriod" })
  timePeriod?: TimePeriod;
}
