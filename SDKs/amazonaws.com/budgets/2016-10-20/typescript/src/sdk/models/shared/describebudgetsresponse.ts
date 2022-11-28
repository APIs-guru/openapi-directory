import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";



// DescribeBudgetsResponse
/** 
 *  Response of DescribeBudgets 
**/
export class DescribeBudgetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budgets", elemType: Budget })
  budgets?: Budget[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
