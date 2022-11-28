import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfile } from "./contenttypeprofile";



// ContentTypeProfiles
/** 
 * Field-level encryption content type-profile. 
**/
export class ContentTypeProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ContentTypeProfile })
  items?: ContentTypeProfile[];

  @SpeakeasyMetadata()
  quantity: number;
}
