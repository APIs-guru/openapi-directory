import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBudgetActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
