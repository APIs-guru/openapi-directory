import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomVerificationEmailTemplate
/** 
 * Contains information about a custom verification email template.
**/
export class CustomVerificationEmailTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureRedirectionUrl?: string;

  @SpeakeasyMetadata()
  fromEmailAddress?: string;

  @SpeakeasyMetadata()
  successRedirectionUrl?: string;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  templateSubject?: string;
}
