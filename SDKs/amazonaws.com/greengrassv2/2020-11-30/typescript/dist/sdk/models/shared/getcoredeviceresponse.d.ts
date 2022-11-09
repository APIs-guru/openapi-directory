import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";
export declare class GetCoreDeviceResponse extends SpeakeasyBase {
    architecture?: string;
    coreDeviceThingName?: string;
    coreVersion?: string;
    lastStatusUpdateTimestamp?: Date;
    platform?: string;
    status?: CoreDeviceStatusEnum;
    tags?: Map<string, string>;
}
