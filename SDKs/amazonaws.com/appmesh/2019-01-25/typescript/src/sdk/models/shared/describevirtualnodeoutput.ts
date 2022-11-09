import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeData } from "./virtualnodedata";


// DescribeVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualNodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
