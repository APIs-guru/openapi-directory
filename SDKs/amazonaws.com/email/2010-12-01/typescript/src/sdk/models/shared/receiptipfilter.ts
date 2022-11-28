import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptFilterPolicyEnum } from "./receiptfilterpolicyenum";



// ReceiptIpFilter
/** 
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
**/
export class ReceiptIpFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr: string;

  @SpeakeasyMetadata()
  policy: ReceiptFilterPolicyEnum;
}
