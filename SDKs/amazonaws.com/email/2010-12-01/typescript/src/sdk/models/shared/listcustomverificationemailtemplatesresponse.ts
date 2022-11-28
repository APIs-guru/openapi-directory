import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomVerificationEmailTemplate } from "./customverificationemailtemplate";



// ListCustomVerificationEmailTemplatesResponse
/** 
 * A paginated list of custom verification email templates.
**/
export class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomVerificationEmailTemplate })
  customVerificationEmailTemplates?: CustomVerificationEmailTemplate[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
