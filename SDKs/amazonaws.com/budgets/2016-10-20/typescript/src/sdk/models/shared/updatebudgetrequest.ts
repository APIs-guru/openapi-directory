import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Budget } from "./budget";


// UpdateBudgetRequest
/** 
 *  Request of UpdateBudget 
**/
export class UpdateBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=NewBudget" })
  newBudget: Budget;
}
