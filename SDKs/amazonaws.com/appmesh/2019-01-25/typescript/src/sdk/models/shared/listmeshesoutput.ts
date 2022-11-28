import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshRef } from "./meshref";



// ListMeshesOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListMeshesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshes", elemType: MeshRef })
  meshes: MeshRef[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
