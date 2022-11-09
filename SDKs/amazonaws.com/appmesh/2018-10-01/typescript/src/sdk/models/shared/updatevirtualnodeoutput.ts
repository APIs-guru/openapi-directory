import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeData } from "./virtualnodedata";


export class UpdateVirtualNodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeData;
}
