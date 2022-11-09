import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeSpecification } from "./instancetypespecification";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
import { InstanceFleetStatus } from "./instancefleetstatus";


// InstanceFleet
/** 
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceFleetType" })
  instanceFleetType?: InstanceFleetTypeEnum;

  @Metadata({ data: "json, name=InstanceTypeSpecifications", elemType: shared.InstanceTypeSpecification })
  instanceTypeSpecifications?: InstanceTypeSpecification[];

  @Metadata({ data: "json, name=LaunchSpecifications" })
  launchSpecifications?: InstanceFleetProvisioningSpecifications;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProvisionedOnDemandCapacity" })
  provisionedOnDemandCapacity?: number;

  @Metadata({ data: "json, name=ProvisionedSpotCapacity" })
  provisionedSpotCapacity?: number;

  @Metadata({ data: "json, name=Status" })
  status?: InstanceFleetStatus;

  @Metadata({ data: "json, name=TargetOnDemandCapacity" })
  targetOnDemandCapacity?: number;

  @Metadata({ data: "json, name=TargetSpotCapacity" })
  targetSpotCapacity?: number;
}
