import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceData } from "./virtualservicedata";



// UpdateVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualServiceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
