import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeData } from "./virtualnodedata";


// DeleteVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteVirtualNodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
