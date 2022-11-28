import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";



// UpdateBudgetRequest
/** 
 *  Request of UpdateBudget 
**/
export class UpdateBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=NewBudget" })
  newBudget: Budget;
}
