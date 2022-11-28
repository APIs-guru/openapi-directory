import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";



// DescribeBudgetResponse
/** 
 *  Response of DescribeBudget 
**/
export class DescribeBudgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budget" })
  budget?: Budget;
}
