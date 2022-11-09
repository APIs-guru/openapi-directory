import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualRouterData } from "./virtualrouterdata";


// UpdateVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualRouterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
