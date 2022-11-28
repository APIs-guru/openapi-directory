import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshData } from "./meshdata";



// CreateMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateMeshOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
