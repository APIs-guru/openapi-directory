import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MeshRef } from "./meshref";


// ListMeshesOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListMeshesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshes", elemType: shared.MeshRef })
  meshes: MeshRef[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
