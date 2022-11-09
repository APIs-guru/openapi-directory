import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeData } from "./virtualnodedata";


// UpdateVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateVirtualNodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
