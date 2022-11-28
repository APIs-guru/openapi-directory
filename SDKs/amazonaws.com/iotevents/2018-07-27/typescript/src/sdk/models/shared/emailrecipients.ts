import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipientDetail } from "./recipientdetail";



// EmailRecipients
/** 
 * <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>
**/
export class EmailRecipients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=to", elemType: RecipientDetail })
  to?: RecipientDetail[];
}
