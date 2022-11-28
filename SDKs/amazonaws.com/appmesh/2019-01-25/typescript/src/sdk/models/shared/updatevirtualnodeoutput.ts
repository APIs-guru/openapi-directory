import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeData } from "./virtualnodedata";



// UpdateVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualNodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
