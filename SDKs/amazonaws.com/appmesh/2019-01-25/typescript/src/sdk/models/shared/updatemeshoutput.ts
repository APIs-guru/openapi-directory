import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeshData } from "./meshdata";


// UpdateMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateMeshOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
