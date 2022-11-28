import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Template
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata()
  htmlPart?: string;

  @SpeakeasyMetadata()
  subjectPart?: string;

  @SpeakeasyMetadata()
  templateName: string;

  @SpeakeasyMetadata()
  textPart?: string;
}
