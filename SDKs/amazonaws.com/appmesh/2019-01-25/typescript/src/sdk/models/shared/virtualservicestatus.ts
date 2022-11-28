import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceStatusCodeEnum } from "./virtualservicestatuscodeenum";



// VirtualServiceStatus
/** 
 * An object that represents the status of a virtual service.
**/
export class VirtualServiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VirtualServiceStatusCodeEnum;
}
