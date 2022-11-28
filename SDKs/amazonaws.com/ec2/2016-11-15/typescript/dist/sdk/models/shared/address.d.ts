import { SpeakeasyBase } from "../../../internal/utils";
import { DomainTypeEnum } from "./domaintypeenum";
import { Tag } from "./tag";
/**
 * Describes an Elastic IP address, or a carrier IP address.
**/
export declare class Address extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    customerOwnedIpv4Pool?: string;
    domain?: DomainTypeEnum;
    instanceId?: string;
    networkBorderGroup?: string;
    networkInterfaceId?: string;
    networkInterfaceOwnerId?: string;
    privateIpAddress?: string;
    publicIp?: string;
    publicIpv4Pool?: string;
    tags?: Tag[];
}
