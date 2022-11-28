import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// InstanceEventWindowAssociationTarget
/** 
 * One or more targets associated with the event window.
**/
export class InstanceEventWindowAssociationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dedicatedHostIds?: string[];

  @SpeakeasyMetadata()
  instanceIds?: string[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
