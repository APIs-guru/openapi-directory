import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupMember } from "./origingroupmember";



// OriginGroupMembers
/** 
 * A complex data type for the origins included in an origin group.
**/
export class OriginGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginGroupMember })
  items: OriginGroupMember[];

  @SpeakeasyMetadata()
  quantity: number;
}
