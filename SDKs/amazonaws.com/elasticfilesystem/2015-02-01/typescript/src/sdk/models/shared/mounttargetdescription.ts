import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";



// MountTargetDescription
/** 
 * Provides a description of a mount target.
**/
export class MountTargetDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=LifeCycleState" })
  lifeCycleState: LifeCycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=MountTargetId" })
  mountTargetId: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
