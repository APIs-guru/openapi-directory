import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";
import { Action } from "./action";


export class UpdateBudgetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=NewAction" })
  newAction: Action;

  @Metadata({ data: "json, name=OldAction" })
  oldAction: Action;
}
