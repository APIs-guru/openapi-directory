import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterData } from "./virtualrouterdata";



// CreateVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateVirtualRouterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
