import { SpeakeasyBase } from "../../../internal/utils";
import { DomainTypeEnum } from "./domaintypeenum";
export declare class AllocateAddressResult extends SpeakeasyBase {
    allocationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    customerOwnedIpv4Pool?: string;
    domain?: DomainTypeEnum;
    networkBorderGroup?: string;
    publicIp?: string;
    publicIpv4Pool?: string;
}
