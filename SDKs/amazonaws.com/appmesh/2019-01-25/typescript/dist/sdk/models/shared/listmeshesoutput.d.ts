import { SpeakeasyBase } from "../../../internal/utils";
import { MeshRef } from "./meshref";
/**
 * <zonbook></zonbook><xhtml></xhtml>
**/
export declare class ListMeshesOutput extends SpeakeasyBase {
    meshes: MeshRef[];
    nextToken?: string;
}
