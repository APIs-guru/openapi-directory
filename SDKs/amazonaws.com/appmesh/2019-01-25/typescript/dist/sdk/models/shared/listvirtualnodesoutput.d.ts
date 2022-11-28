import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeRef } from "./virtualnoderef";
/**
 * <zonbook></zonbook><xhtml></xhtml>
**/
export declare class ListVirtualNodesOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualNodes: VirtualNodeRef[];
}
