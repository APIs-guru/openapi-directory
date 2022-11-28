import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeStatusCodeEnum } from "./virtualnodestatuscodeenum";



// VirtualNodeStatus
/** 
 * An object representing the current status of the virtual node.
**/
export class VirtualNodeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VirtualNodeStatusCodeEnum;
}
