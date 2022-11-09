import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeStatusCodeEnum } from "./virtualnodestatuscodeenum";


// VirtualNodeStatus
/** 
 * An object representing the current status of the virtual node.
**/
export class VirtualNodeStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: VirtualNodeStatusCodeEnum;
}
