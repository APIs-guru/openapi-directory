import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
import { CustomRoutingAcceleratorStatusEnum } from "./customroutingacceleratorstatusenum";



// CustomRoutingAccelerator
/** 
 * Attributes of a custom routing accelerator.
**/
export class CustomRoutingAccelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IpSets", elemType: IpSet })
  ipSets?: IpSet[];

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CustomRoutingAcceleratorStatusEnum;
}
