import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeshRef
/** 
 * An object representing a service mesh returned by a list operation.
**/
export class MeshRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName?: string;
}
