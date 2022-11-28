import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a Traffic Mirror session.
**/
export declare class TrafficMirrorSession extends SpeakeasyBase {
    description?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    packetLength?: number;
    sessionNumber?: number;
    tags?: Tag[];
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId?: string;
    trafficMirrorTargetId?: string;
    virtualNetworkId?: number;
}
