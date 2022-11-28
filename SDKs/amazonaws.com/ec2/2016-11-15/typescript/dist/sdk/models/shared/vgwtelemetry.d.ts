import { SpeakeasyBase } from "../../../internal/utils";
import { TelemetryStatusEnum } from "./telemetrystatusenum";
/**
 * Describes telemetry for a VPN tunnel.
**/
export declare class VgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: TelemetryStatusEnum;
    statusMessage?: string;
}
