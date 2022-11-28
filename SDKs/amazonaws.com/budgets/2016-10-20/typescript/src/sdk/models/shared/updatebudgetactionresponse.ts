import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



export class UpdateBudgetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=NewAction" })
  newAction: Action;

  @SpeakeasyMetadata({ data: "json, name=OldAction" })
  oldAction: Action;
}
