import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualNodeRef } from "./virtualnoderef";


export class ListVirtualNodesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualNodes", elemType: shared.VirtualNodeRef })
  virtualNodes: VirtualNodeRef[];
}
