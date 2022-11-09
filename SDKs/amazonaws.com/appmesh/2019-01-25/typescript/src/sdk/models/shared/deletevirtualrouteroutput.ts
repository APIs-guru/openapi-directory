import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualRouterData } from "./virtualrouterdata";


// DeleteVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteVirtualRouterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
