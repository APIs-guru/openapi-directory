import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshData } from "./meshdata";



// DescribeMeshOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeMeshOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh: MeshData;
}
