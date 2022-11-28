import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
import { InstanceStatusEnum } from "./instancestatusenum";
/**
 * Represents the device instance.
**/
export declare class DeviceInstance extends SpeakeasyBase {
    arn?: string;
    deviceArn?: string;
    instanceProfile?: InstanceProfile;
    labels?: string[];
    status?: InstanceStatusEnum;
    udid?: string;
}
