import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LocationTypeEnum } from "./locationtypeenum";
/**
 * The instance types offered.
**/
export declare class InstanceTypeOffering extends SpeakeasyBase {
    instanceType?: InstanceTypeEnum;
    location?: string;
    locationType?: LocationTypeEnum;
}
