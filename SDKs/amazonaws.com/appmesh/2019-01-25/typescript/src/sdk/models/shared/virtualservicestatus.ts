import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceStatusCodeEnum } from "./virtualservicestatuscodeenum";


// VirtualServiceStatus
/** 
 * An object that represents the status of a virtual service.
**/
export class VirtualServiceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: VirtualServiceStatusCodeEnum;
}
