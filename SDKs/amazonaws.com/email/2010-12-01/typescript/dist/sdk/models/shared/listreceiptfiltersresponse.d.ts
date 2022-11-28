import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptFilter } from "./receiptfilter";
/**
 * A list of IP address filters that exist under your AWS account.
**/
export declare class ListReceiptFiltersResponse extends SpeakeasyBase {
    filters?: ReceiptFilter[];
}
