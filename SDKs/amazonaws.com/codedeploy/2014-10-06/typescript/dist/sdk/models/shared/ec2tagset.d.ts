import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2TagFilter } from "./ec2tagfilter";
/**
 * Information about groups of EC2 instance tags.
**/
export declare class Ec2TagSet extends SpeakeasyBase {
    ec2TagSetList?: Ec2TagFilter[][];
}
