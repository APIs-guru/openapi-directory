import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NeighborConnectionDetail } from "./neighborconnectiondetail";
export declare class ListServerNeighborsResponse extends SpeakeasyBase {
    knownDependencyCount?: number;
    neighbors: NeighborConnectionDetail[];
    nextToken?: string;
}
