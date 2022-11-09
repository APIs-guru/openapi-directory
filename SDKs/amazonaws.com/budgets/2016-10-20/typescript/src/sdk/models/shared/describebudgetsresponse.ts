import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Budget } from "./budget";


// DescribeBudgetsResponse
/** 
 *  Response of DescribeBudgets 
**/
export class DescribeBudgetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budgets", elemType: shared.Budget })
  budgets?: Budget[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
