import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginGroupMember
/** 
 * An origin in an origin group.
**/
export class OriginGroupMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originId: string;
}
