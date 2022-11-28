import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterStatusCodeEnum } from "./virtualrouterstatuscodeenum";



// VirtualRouterStatus
/** 
 * An object representing the status of a virtual router. 
**/
export class VirtualRouterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VirtualRouterStatusCodeEnum;
}
