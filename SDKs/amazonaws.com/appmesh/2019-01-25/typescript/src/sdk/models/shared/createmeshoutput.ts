import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeshData } from "./meshdata";


// CreateMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateMeshOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
