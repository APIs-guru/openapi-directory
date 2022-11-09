import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupOwnerSetting
/** 
 * Group owner related settings for local resources.
**/
export class GroupOwnerSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoAddGroupOwner" })
  autoAddGroupOwner?: boolean;

  @Metadata({ data: "json, name=GroupOwner" })
  groupOwner?: string;
}
