import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
import { DeviceTypeEnum } from "./devicetypeenum";
/**
 * Includes information about the device.
**/
export declare class DeviceSummary extends SpeakeasyBase {
    deviceArn: string;
    deviceName: string;
    deviceStatus: DeviceStatusEnum;
    deviceType: DeviceTypeEnum;
    providerName: string;
}
