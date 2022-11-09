import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EbsVolume } from "./ebsvolume";
import { MarketTypeEnum } from "./markettypeenum";
import { InstanceStatus } from "./instancestatus";


// Instance
/** 
 * Represents an EC2 instance provisioned as part of cluster.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=EbsVolumes", elemType: shared.EbsVolume })
  ebsVolumes?: EbsVolume[];

  @Metadata({ data: "json, name=Ec2InstanceId" })
  ec2InstanceId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceFleetId" })
  instanceFleetId?: string;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @Metadata({ data: "json, name=PrivateDnsName" })
  privateDnsName?: string;

  @Metadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=PublicDnsName" })
  publicDnsName?: string;

  @Metadata({ data: "json, name=PublicIpAddress" })
  publicIpAddress?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InstanceStatus;
}
