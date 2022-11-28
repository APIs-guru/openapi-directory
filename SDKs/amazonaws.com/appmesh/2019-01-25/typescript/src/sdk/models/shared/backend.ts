import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceBackend } from "./virtualservicebackend";



// Backend
/** 
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
**/
export class Backend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService?: VirtualServiceBackend;
}
