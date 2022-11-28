import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";
export declare class CreateNetworkProfileRequest extends SpeakeasyBase {
    description?: string;
    downlinkBandwidthBits?: number;
    downlinkDelayMs?: number;
    downlinkJitterMs?: number;
    downlinkLossPercent?: number;
    name: string;
    projectArn: string;
    type?: NetworkProfileTypeEnum;
    uplinkBandwidthBits?: number;
    uplinkDelayMs?: number;
    uplinkJitterMs?: number;
    uplinkLossPercent?: number;
}
