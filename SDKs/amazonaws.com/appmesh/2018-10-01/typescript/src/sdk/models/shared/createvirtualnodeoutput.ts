import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeData } from "./virtualnodedata";


export class CreateVirtualNodeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualNode" })
  virtualNode?: VirtualNodeData;
}
