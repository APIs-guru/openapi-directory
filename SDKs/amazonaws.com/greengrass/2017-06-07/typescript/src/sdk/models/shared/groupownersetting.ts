import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupOwnerSetting
/** 
 * Group owner related settings for local resources.
**/
export class GroupOwnerSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoAddGroupOwner" })
  autoAddGroupOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GroupOwner" })
  groupOwner?: string;
}
