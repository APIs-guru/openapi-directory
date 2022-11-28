import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptFilter } from "./receiptfilter";



// ListReceiptFiltersResponse
/** 
 * A list of IP address filters that exist under your AWS account.
**/
export class ListReceiptFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReceiptFilter })
  filters?: ReceiptFilter[];
}
