import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailContent
/** 
 * Contains the subject and message of an email.
**/
export class EmailContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalMessage" })
  additionalMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
