import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualRouterStatusCodeEnum } from "./virtualrouterstatuscodeenum";


// VirtualRouterStatus
/** 
 * An object representing the status of a virtual router. 
**/
export class VirtualRouterStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: VirtualRouterStatusCodeEnum;
}
