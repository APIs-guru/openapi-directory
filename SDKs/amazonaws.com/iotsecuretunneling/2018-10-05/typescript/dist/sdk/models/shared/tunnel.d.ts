import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { ConnectionState } from "./connectionstate";
import { TunnelStatusEnum } from "./tunnelstatusenum";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";
/**
 * A connection between a source computer and a destination device.
**/
export declare class Tunnel extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    destinationConfig?: DestinationConfig;
    destinationConnectionState?: ConnectionState;
    lastUpdatedAt?: Date;
    sourceConnectionState?: ConnectionState;
    status?: TunnelStatusEnum;
    tags?: Tag[];
    timeoutConfig?: TimeoutConfig;
    tunnelArn?: string;
    tunnelId?: string;
}
