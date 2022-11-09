import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteBudgetRequest
/** 
 *  Request of DeleteBudget 
**/
export class DeleteBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
