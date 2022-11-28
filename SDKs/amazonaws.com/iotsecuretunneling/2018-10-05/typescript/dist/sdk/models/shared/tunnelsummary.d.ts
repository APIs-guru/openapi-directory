import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelStatusEnum } from "./tunnelstatusenum";
/**
 * Information about the tunnel.
**/
export declare class TunnelSummary extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    lastUpdatedAt?: Date;
    status?: TunnelStatusEnum;
    tunnelArn?: string;
    tunnelId?: string;
}
