import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
import { ReceiptRule } from "./receiptrule";
/**
 * Represents the details of the specified receipt rule set.
**/
export declare class DescribeReceiptRuleSetResponse extends SpeakeasyBase {
    metadata?: ReceiptRuleSetMetadata;
    rules?: ReceiptRule[];
}
