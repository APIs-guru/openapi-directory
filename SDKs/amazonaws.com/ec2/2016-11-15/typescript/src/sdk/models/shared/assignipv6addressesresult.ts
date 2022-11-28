import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignIpv6AddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignedIpv6Addresses?: string[];

  @SpeakeasyMetadata()
  assignedIpv6Prefixes?: string[];

  @SpeakeasyMetadata()
  networkInterfaceId?: string;
}
