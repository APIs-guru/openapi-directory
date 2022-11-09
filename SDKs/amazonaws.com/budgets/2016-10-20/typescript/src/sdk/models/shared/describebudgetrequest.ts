import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeBudgetRequest
/** 
 *  Request of DescribeBudget 
**/
export class DescribeBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;
}
