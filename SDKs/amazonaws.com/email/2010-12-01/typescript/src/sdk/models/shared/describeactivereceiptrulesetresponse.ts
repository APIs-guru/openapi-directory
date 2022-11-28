import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
import { ReceiptRule } from "./receiptrule";



// DescribeActiveReceiptRuleSetResponse
/** 
 * Represents the metadata and receipt rules for the receipt rule set that is currently active.
**/
export class DescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  metadata?: ReceiptRuleSetMetadata;

  @SpeakeasyMetadata({ elemType: ReceiptRule })
  rules?: ReceiptRule[];
}
