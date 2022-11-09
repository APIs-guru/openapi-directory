import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipientDetail } from "./recipientdetail";
/**
 * <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>
**/
export declare class EmailRecipients extends SpeakeasyBase {
    to?: RecipientDetail[];
}
