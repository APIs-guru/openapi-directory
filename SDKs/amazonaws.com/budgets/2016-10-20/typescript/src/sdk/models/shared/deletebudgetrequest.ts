import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteBudgetRequest
/** 
 *  Request of DeleteBudget 
**/
export class DeleteBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
