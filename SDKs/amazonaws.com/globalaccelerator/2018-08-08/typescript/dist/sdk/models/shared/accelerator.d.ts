import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
import { AcceleratorStatusEnum } from "./acceleratorstatusenum";
/**
 * An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
**/
export declare class Accelerator extends SpeakeasyBase {
    acceleratorArn?: string;
    createdTime?: Date;
    dnsName?: string;
    enabled?: boolean;
    ipAddressType?: IpAddressTypeEnum;
    ipSets?: IpSet[];
    lastModifiedTime?: Date;
    name?: string;
    status?: AcceleratorStatusEnum;
}
