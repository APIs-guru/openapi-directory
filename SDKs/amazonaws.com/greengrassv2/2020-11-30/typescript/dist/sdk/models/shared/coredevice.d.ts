import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";
/**
 * Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
**/
export declare class CoreDevice extends SpeakeasyBase {
    coreDeviceThingName?: string;
    lastStatusUpdateTimestamp?: Date;
    status?: CoreDeviceStatusEnum;
}
