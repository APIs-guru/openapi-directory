import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoTypeEnum } from "./environmentinfotypeenum";
/**
 * The information retrieved from the Amazon EC2 instances.
**/
export declare class EnvironmentInfoDescription extends SpeakeasyBase {
    ec2InstanceId?: string;
    infoType?: EnvironmentInfoTypeEnum;
    message?: string;
    sampleTimestamp?: Date;
}
