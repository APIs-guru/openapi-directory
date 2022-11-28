import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeRef
/** 
 * An object representing a virtual node returned by a list operation.
**/
export class VirtualNodeRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualNodeName" })
  virtualNodeName?: string;
}
