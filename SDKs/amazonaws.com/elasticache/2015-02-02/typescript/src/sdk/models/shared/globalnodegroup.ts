import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalNodeGroup
/** 
 * Indicates the slot configuration and global identifier for a slice group.
**/
export class GlobalNodeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalNodeGroupId?: string;

  @SpeakeasyMetadata()
  slots?: string;
}
