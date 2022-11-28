import { SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecification } from "./ipv4prefixspecification";
import { AssignedPrivateIpAddress } from "./assignedprivateipaddress";
export declare class AssignPrivateIpAddressesResult extends SpeakeasyBase {
    assignedIpv4Prefixes?: Ipv4PrefixSpecification[];
    assignedPrivateIpAddresses?: AssignedPrivateIpAddress[];
    networkInterfaceId?: string;
}
