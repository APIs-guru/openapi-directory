import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



export class DescribeBudgetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: Action;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
