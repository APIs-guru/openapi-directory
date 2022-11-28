import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshData } from "./meshdata";



// UpdateMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateMeshOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
