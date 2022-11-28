import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRule } from "./receiptrule";



// DescribeReceiptRuleResponse
/** 
 * Represents the details of a receipt rule.
**/
export class DescribeReceiptRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rule?: ReceiptRule;
}
