import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
import { CustomRoutingAcceleratorStatusEnum } from "./customroutingacceleratorstatusenum";


// CustomRoutingAccelerator
/** 
 * Attributes of a custom routing accelerator.
**/
export class CustomRoutingAccelerator extends SpeakeasyBase {
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
  status?: CustomRoutingAcceleratorStatusEnum;
}
