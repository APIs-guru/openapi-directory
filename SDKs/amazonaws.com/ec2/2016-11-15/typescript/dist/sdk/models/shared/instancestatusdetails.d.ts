import { SpeakeasyBase } from "../../../internal/utils";
import { StatusNameEnum } from "./statusnameenum";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Describes the instance status.
**/
export declare class InstanceStatusDetails extends SpeakeasyBase {
    impairedSince?: Date;
    name?: StatusNameEnum;
    status?: StatusTypeEnum;
}
