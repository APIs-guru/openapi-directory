import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeshData } from "./meshdata";



export class DeleteMeshOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mesh" })
  mesh?: MeshData;
}
