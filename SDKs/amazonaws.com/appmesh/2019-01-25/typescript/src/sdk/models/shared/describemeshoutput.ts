import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeshData } from "./meshdata";


// DescribeMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeMeshOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
