import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeData } from "./virtualnodedata";



// DescribeVirtualNodeOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeVirtualNodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode: VirtualNodeData;
}
