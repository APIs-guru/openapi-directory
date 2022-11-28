import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
import { InstanceTypeEnum } from "./instancetypeenum";
import { SpotFleetMonitoring } from "./spotfleetmonitoring";
import { InstanceNetworkInterfaceSpecification } from "./instancenetworkinterfacespecification";
import { SpotPlacement } from "./spotplacement";
import { GroupIdentifier } from "./groupidentifier";
import { SpotFleetTagSpecification } from "./spotfleettagspecification";



// SpotFleetLaunchSpecification
/** 
 * Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.
**/
export class SpotFleetLaunchSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressingType?: string;

  @SpeakeasyMetadata({ elemType: BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @SpeakeasyMetadata()
  ebsOptimized?: boolean;

  @SpeakeasyMetadata()
  iamInstanceProfile?: IamInstanceProfileSpecification;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  kernelId?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  monitoring?: SpotFleetMonitoring;

  @SpeakeasyMetadata({ elemType: InstanceNetworkInterfaceSpecification })
  networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  @SpeakeasyMetadata()
  placement?: SpotPlacement;

  @SpeakeasyMetadata()
  ramdiskId?: string;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  securityGroups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: SpotFleetTagSpecification })
  tagSpecifications?: SpotFleetTagSpecification[];

  @SpeakeasyMetadata()
  userData?: string;

  @SpeakeasyMetadata()
  weightedCapacity?: number;
}
