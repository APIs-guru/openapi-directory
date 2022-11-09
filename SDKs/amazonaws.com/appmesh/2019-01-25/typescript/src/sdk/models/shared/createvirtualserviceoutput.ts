import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualServiceData } from "./virtualservicedata";


// CreateVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateVirtualServiceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
