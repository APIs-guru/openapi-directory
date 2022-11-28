import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetActivityStatusEnum } from "./fleetactivitystatusenum";
import { DescribeFleetError } from "./describefleeterror";
import { FleetExcessCapacityTerminationPolicyEnum } from "./fleetexcesscapacityterminationpolicyenum";
import { FleetStateCodeEnum } from "./fleetstatecodeenum";
import { DescribeFleetsInstances } from "./describefleetsinstances";
import { FleetLaunchTemplateConfig } from "./fleetlaunchtemplateconfig";
import { OnDemandOptions } from "./ondemandoptions";
import { SpotOptions } from "./spotoptions";
import { Tag } from "./tag";
import { TargetCapacitySpecification } from "./targetcapacityspecification";
import { FleetTypeEnum } from "./fleettypeenum";



// FleetData
/** 
 * Describes an EC2 Fleet.
**/
export class FleetData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityStatus?: FleetActivityStatusEnum;

  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  context?: string;

  @SpeakeasyMetadata()
  createTime?: Date;

  @SpeakeasyMetadata({ elemType: DescribeFleetError })
  errors?: DescribeFleetError[];

  @SpeakeasyMetadata()
  excessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicyEnum;

  @SpeakeasyMetadata()
  fleetId?: string;

  @SpeakeasyMetadata()
  fleetState?: FleetStateCodeEnum;

  @SpeakeasyMetadata()
  fulfilledCapacity?: number;

  @SpeakeasyMetadata()
  fulfilledOnDemandCapacity?: number;

  @SpeakeasyMetadata({ elemType: DescribeFleetsInstances })
  instances?: DescribeFleetsInstances[];

  @SpeakeasyMetadata({ elemType: FleetLaunchTemplateConfig })
  launchTemplateConfigs?: FleetLaunchTemplateConfig[];

  @SpeakeasyMetadata()
  onDemandOptions?: OnDemandOptions;

  @SpeakeasyMetadata()
  replaceUnhealthyInstances?: boolean;

  @SpeakeasyMetadata()
  spotOptions?: SpotOptions;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  targetCapacitySpecification?: TargetCapacitySpecification;

  @SpeakeasyMetadata()
  terminateInstancesWithExpiration?: boolean;

  @SpeakeasyMetadata()
  type?: FleetTypeEnum;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validUntil?: Date;
}
