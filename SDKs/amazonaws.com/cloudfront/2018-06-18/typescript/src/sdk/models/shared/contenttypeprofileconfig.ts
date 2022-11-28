import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfiles } from "./contenttypeprofiles";



// ContentTypeProfileConfig
/** 
 * The configuration for a field-level encryption content type-profile mapping. 
**/
export class ContentTypeProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentTypeProfiles?: ContentTypeProfiles;

  @SpeakeasyMetadata()
  forwardWhenContentTypeIsUnknown: boolean;
}
