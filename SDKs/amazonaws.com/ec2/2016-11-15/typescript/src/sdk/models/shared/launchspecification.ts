import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RunInstancesMonitoringEnabled } from "./runinstancesmonitoringenabled";
import { InstanceNetworkInterfaceSpecification } from "./instancenetworkinterfacespecification";
import { SpotPlacement } from "./spotplacement";
import { GroupIdentifier } from "./groupidentifier";



// LaunchSpecification
/** 
 * Describes the launch specification for an instance.
**/
export class LaunchSpecification extends SpeakeasyBase {
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
  monitoring?: RunInstancesMonitoringEnabled;

  @SpeakeasyMetadata({ elemType: InstanceNetworkInterfaceSpecification })
  networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  @SpeakeasyMetadata()
  placement?: SpotPlacement;

  @SpeakeasyMetadata()
  ramdiskId?: string;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  securityGroups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  userData?: string;
}
