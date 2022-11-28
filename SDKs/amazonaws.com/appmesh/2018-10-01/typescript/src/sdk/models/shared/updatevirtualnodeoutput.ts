import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeData } from "./virtualnodedata";



export class UpdateVirtualNodeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeData;
}
