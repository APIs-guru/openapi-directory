import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";
/**
 * Represents the result of a list device pools request.
**/
export declare class ListDevicePoolsRequest extends SpeakeasyBase {
    arn: string;
    nextToken?: string;
    type?: DevicePoolTypeEnum;
}
