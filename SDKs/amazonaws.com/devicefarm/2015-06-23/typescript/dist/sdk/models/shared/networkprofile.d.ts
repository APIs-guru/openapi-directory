import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";
/**
 * An array of settings that describes characteristics of a network profile.
**/
export declare class NetworkProfile extends SpeakeasyBase {
    arn?: string;
    description?: string;
    downlinkBandwidthBits?: number;
    downlinkDelayMs?: number;
    downlinkJitterMs?: number;
    downlinkLossPercent?: number;
    name?: string;
    type?: NetworkProfileTypeEnum;
    uplinkBandwidthBits?: number;
    uplinkDelayMs?: number;
    uplinkJitterMs?: number;
    uplinkLossPercent?: number;
}
