import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecification } from "./ipv4prefixspecification";
import { AssignedPrivateIpAddress } from "./assignedprivateipaddress";



export class AssignPrivateIpAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Ipv4PrefixSpecification })
  assignedIpv4Prefixes?: Ipv4PrefixSpecification[];

  @SpeakeasyMetadata({ elemType: AssignedPrivateIpAddress })
  assignedPrivateIpAddresses?: AssignedPrivateIpAddress[];

  @SpeakeasyMetadata()
  networkInterfaceId?: string;
}
