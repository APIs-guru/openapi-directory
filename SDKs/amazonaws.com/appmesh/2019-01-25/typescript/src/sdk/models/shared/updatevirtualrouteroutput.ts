import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterData } from "./virtualrouterdata";



// UpdateVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualRouterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
