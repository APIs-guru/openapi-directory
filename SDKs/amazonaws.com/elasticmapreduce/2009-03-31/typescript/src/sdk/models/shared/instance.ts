import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsVolume } from "./ebsvolume";
import { MarketTypeEnum } from "./markettypeenum";
import { InstanceStatus } from "./instancestatus";



// Instance
/** 
 * Represents an EC2 instance provisioned as part of cluster.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EbsVolumes", elemType: EbsVolume })
  ebsVolumes?: EbsVolume[];

  @SpeakeasyMetadata({ data: "json, name=Ec2InstanceId" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PrivateDnsName" })
  privateDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicDnsName" })
  publicDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIpAddress" })
  publicIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InstanceStatus;
}
