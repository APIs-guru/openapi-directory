import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
import { ReceiptRule } from "./receiptrule";



// DescribeReceiptRuleSetResponse
/** 
 * Represents the details of the specified receipt rule set.
**/
export class DescribeReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  metadata?: ReceiptRuleSetMetadata;

  @SpeakeasyMetadata({ elemType: ReceiptRule })
  rules?: ReceiptRule[];
}
