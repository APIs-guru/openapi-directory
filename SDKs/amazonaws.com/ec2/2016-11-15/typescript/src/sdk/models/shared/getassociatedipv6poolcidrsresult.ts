import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv6CidrAssociation } from "./ipv6cidrassociation";



export class GetAssociatedIpv6PoolCidrsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Ipv6CidrAssociation })
  ipv6CidrAssociations?: Ipv6CidrAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
