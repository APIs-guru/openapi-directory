import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
/**
 * A list of receipt rule sets that exist under your AWS account.
**/
export declare class ListReceiptRuleSetsResponse extends SpeakeasyBase {
    nextToken?: string;
    ruleSets?: ReceiptRuleSetMetadata[];
}
