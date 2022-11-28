import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeBudgetRequest
/** 
 *  Request of DescribeBudget 
**/
export class DescribeBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
