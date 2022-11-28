import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeData } from "./virtualnodedata";



// DeleteVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteVirtualNodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
