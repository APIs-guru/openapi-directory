import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
import { CustomRoutingAcceleratorStatusEnum } from "./customroutingacceleratorstatusenum";
/**
 * Attributes of a custom routing accelerator.
**/
export declare class CustomRoutingAccelerator extends SpeakeasyBase {
    acceleratorArn?: string;
    createdTime?: Date;
    dnsName?: string;
    enabled?: boolean;
    ipAddressType?: IpAddressTypeEnum;
    ipSets?: IpSet[];
    lastModifiedTime?: Date;
    name?: string;
    status?: CustomRoutingAcceleratorStatusEnum;
}
