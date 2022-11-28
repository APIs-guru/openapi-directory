import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCustomVerificationEmailTemplateResponse
/** 
 * The content of the custom verification email template.
**/
export class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureRedirectionUrl?: string;

  @SpeakeasyMetadata()
  fromEmailAddress?: string;

  @SpeakeasyMetadata()
  successRedirectionUrl?: string;

  @SpeakeasyMetadata()
  templateContent?: string;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  templateSubject?: string;
}
