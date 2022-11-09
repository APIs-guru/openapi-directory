import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBudgetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ActionId" })
  actionId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
