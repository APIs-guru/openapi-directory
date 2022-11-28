import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";
export declare class UpdateNetworkProfileRequest extends SpeakeasyBase {
    arn: string;
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
