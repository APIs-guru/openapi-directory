import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeSpecification } from "./instancetypespecification";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
import { InstanceFleetStatus } from "./instancefleetstatus";



// InstanceFleet
/** 
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType?: InstanceFleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceTypeSpecifications", elemType: InstanceTypeSpecification })
  instanceTypeSpecifications?: InstanceTypeSpecification[];

  @SpeakeasyMetadata({ data: "json, name=LaunchSpecifications" })
  launchSpecifications?: InstanceFleetProvisioningSpecifications;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedOnDemandCapacity" })
  provisionedOnDemandCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedSpotCapacity" })
  provisionedSpotCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InstanceFleetStatus;

  @SpeakeasyMetadata({ data: "json, name=TargetOnDemandCapacity" })
  targetOnDemandCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetSpotCapacity" })
  targetSpotCapacity?: number;
}
