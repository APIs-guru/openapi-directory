import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TemplateMetadata
/** 
 * Contains information about an email template.
**/
export class TemplateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdTimestamp?: Date;

  @SpeakeasyMetadata()
  name?: string;
}
