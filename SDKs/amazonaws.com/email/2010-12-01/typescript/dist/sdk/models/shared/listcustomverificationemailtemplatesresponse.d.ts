import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVerificationEmailTemplate } from "./customverificationemailtemplate";
/**
 * A paginated list of custom verification email templates.
**/
export declare class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
    customVerificationEmailTemplates?: CustomVerificationEmailTemplate[];
    nextToken?: string;
}
