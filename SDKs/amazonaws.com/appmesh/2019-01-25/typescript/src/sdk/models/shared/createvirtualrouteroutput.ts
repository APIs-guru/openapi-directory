import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualRouterData } from "./virtualrouterdata";


// CreateVirtualRouterOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateVirtualRouterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualRouter" })
  virtualRouter: VirtualRouterData;
}
