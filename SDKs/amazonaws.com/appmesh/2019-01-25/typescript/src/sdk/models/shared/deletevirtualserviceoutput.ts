import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceData } from "./virtualservicedata";


// DeleteVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteVirtualServiceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
