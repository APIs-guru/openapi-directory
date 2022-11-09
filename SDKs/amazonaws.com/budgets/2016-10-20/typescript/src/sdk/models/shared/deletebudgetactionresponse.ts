import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";


export class DeleteBudgetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Action" })
  action: Action;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
