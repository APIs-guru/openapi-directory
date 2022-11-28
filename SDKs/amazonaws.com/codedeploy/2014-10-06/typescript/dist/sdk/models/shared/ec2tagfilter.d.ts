import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagFilterTypeEnum } from "./ec2tagfiltertypeenum";
/**
 * Information about an EC2 tag filter.
**/
export declare class Ec2TagFilter extends SpeakeasyBase {
    key?: string;
    type?: Ec2TagFilterTypeEnum;
    value?: string;
}
