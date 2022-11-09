import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailContent
/** 
 * Contains the subject and message of an email.
**/
export class EmailContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalMessage" })
  additionalMessage?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
