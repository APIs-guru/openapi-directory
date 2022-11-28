import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceCounts } from "./ec2instancecounts";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
/**
 * <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>DescribeFleetLocationCapacity</a> | <a>UpdateFleetCapacity</a> </p>
**/
export declare class FleetCapacity extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    instanceCounts?: Ec2InstanceCounts;
    instanceType?: Ec2InstanceTypeEnum;
    location?: string;
}
