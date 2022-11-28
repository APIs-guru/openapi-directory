import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceCounts } from "./ec2instancecounts";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";



// FleetCapacity
/** 
 * <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>DescribeFleetLocationCapacity</a> | <a>UpdateFleetCapacity</a> </p>
**/
export class FleetCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCounts" })
  instanceCounts?: Ec2InstanceCounts;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: Ec2InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
