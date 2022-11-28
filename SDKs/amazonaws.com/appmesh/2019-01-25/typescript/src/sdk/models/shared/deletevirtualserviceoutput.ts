import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceData } from "./virtualservicedata";



// DeleteVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteVirtualServiceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
