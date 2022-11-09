import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeRef
/** 
 * An object representing a virtual node returned by a list operation.
**/
export class VirtualNodeRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=meshName" })
  meshName?: string;

  @Metadata({ data: "json, name=virtualNodeName" })
  virtualNodeName?: string;
}
