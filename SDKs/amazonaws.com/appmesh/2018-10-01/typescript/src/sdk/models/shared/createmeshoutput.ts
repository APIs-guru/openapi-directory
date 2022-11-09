import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeshData } from "./meshdata";


export class CreateMeshOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=mesh" })
  mesh?: MeshData;
}
