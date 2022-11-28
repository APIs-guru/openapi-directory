import { SpeakeasyBase } from "../../../internal/utils";
import { NeighborConnectionDetail } from "./neighborconnectiondetail";
export declare class ListServerNeighborsResponse extends SpeakeasyBase {
    knownDependencyCount?: number;
    neighbors: NeighborConnectionDetail[];
    nextToken?: string;
}
