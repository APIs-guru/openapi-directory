import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupIdentifier } from "./groupidentifier";
import { Tag } from "./tag";



// ClassicLinkInstance
/** 
 * Describes a linked EC2-Classic instance.
**/
export class ClassicLinkInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
