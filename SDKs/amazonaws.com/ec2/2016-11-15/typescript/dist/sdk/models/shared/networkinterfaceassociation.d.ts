import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
**/
export declare class NetworkInterfaceAssociation extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    ipOwnerId?: string;
    publicDnsName?: string;
    publicIp?: string;
}
