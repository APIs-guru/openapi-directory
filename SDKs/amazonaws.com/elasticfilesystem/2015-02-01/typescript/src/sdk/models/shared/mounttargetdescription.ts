import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";


// MountTargetDescription
/** 
 * Provides a description of a mount target.
**/
export class MountTargetDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @Metadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=LifeCycleState" })
  lifeCycleState: LifeCycleStateEnum;

  @Metadata({ data: "json, name=MountTargetId" })
  mountTargetId: string;

  @Metadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
