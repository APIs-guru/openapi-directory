import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Details about neighboring servers.
**/
export declare class NeighborConnectionDetail extends SpeakeasyBase {
    connectionsCount: number;
    destinationPort?: number;
    destinationServerId: string;
    sourceServerId: string;
    transportProtocol?: string;
}
