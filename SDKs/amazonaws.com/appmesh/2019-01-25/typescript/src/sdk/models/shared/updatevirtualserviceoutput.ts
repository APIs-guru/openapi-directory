import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceData } from "./virtualservicedata";


// UpdateVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualServiceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
