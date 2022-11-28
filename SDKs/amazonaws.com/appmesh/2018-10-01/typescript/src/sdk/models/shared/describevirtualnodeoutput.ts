import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeData } from "./virtualnodedata";



export class DescribeVirtualNodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeData;
}
