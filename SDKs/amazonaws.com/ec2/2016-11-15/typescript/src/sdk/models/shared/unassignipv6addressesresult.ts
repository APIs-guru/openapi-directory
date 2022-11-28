import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnassignIpv6AddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  unassignedIpv6Addresses?: string[];

  @SpeakeasyMetadata()
  unassignedIpv6Prefixes?: string[];
}
