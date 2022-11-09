import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeshRef
/** 
 * An object representing a service mesh returned by a list operation.
**/
export class MeshRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=meshName" })
  meshName?: string;
}
