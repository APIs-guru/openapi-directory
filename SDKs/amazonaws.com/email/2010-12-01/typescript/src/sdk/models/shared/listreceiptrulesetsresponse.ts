import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";



// ListReceiptRuleSetsResponse
/** 
 * A list of receipt rule sets that exist under your AWS account.
**/
export class ListReceiptRuleSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ReceiptRuleSetMetadata })
  ruleSets?: ReceiptRuleSetMetadata[];
}
