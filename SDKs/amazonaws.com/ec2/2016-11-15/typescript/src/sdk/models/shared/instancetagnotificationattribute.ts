import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceTagNotificationAttribute
/** 
 * Describes the registered tag keys for the current Region.
**/
export class InstanceTagNotificationAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  includeAllTagsOfInstance?: boolean;

  @SpeakeasyMetadata()
  instanceTagKeys?: string[];
}
