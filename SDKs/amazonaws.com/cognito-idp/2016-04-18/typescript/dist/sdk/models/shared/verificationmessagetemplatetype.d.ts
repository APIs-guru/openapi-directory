import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultEmailOptionTypeEnum } from "./defaultemailoptiontypeenum";
/**
 * The template for verification messages.
**/
export declare class VerificationMessageTemplateType extends SpeakeasyBase {
    defaultEmailOption?: DefaultEmailOptionTypeEnum;
    emailMessage?: string;
    emailMessageByLink?: string;
    emailSubject?: string;
    emailSubjectByLink?: string;
    smsMessage?: string;
}
