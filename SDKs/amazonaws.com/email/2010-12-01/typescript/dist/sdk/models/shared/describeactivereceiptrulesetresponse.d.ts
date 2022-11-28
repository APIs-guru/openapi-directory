import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
import { ReceiptRule } from "./receiptrule";
/**
 * Represents the metadata and receipt rules for the receipt rule set that is currently active.
**/
export declare class DescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
    metadata?: ReceiptRuleSetMetadata;
    rules?: ReceiptRule[];
}
