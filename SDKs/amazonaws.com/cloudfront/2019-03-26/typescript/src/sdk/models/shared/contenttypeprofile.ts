import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// ContentTypeProfile
/** 
 * A field-level encryption content type profile. 
**/
export class ContentTypeProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  format: FormatEnum;

  @SpeakeasyMetadata()
  profileId?: string;
}
