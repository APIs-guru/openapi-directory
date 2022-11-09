import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Budget } from "./budget";


// DescribeBudgetResponse
/** 
 *  Response of DescribeBudget 
**/
export class DescribeBudgetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budget" })
  budget?: Budget;
}
