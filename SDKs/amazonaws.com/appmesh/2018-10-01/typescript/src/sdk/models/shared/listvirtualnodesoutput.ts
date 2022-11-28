import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeRef } from "./virtualnoderef";



export class ListVirtualNodesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualNodes", elemType: VirtualNodeRef })
  virtualNodes: VirtualNodeRef[];
}
