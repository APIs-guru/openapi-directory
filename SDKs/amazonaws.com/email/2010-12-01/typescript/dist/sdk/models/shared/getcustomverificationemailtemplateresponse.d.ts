import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The content of the custom verification email template.
**/
export declare class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    failureRedirectionUrl?: string;
    fromEmailAddress?: string;
    successRedirectionUrl?: string;
    templateContent?: string;
    templateName?: string;
    templateSubject?: string;
}
