import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";
/**
 * DescribeLocationEfsResponse
**/
export declare class DescribeLocationEfsResponse extends SpeakeasyBase {
    creationTime?: Date;
    ec2Config?: Ec2Config;
    locationArn?: string;
    locationUri?: string;
}
