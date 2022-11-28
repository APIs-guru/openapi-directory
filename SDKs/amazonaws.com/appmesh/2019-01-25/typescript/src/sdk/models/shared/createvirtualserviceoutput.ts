import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceData } from "./virtualservicedata";



// CreateVirtualServiceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateVirtualServiceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualService" })
  virtualService: VirtualServiceData;
}
