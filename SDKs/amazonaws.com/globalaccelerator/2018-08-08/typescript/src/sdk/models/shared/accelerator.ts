import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
import { AcceleratorStatusEnum } from "./acceleratorstatusenum";


// Accelerator
/** 
 * An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
**/
export class Accelerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=IpSets", elemType: shared.IpSet })
  ipSets?: IpSet[];

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AcceleratorStatusEnum;
}
