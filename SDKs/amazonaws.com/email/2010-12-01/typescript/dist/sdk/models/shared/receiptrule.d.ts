import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptAction } from "./receiptaction";
import { TlsPolicyEnum } from "./tlspolicyenum";
/**
 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
**/
export declare class ReceiptRule extends SpeakeasyBase {
    actions?: ReceiptAction[];
    enabled?: boolean;
    name: string;
    recipients?: string[];
    scanEnabled?: boolean;
    tlsPolicy?: TlsPolicyEnum;
}
