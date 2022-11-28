import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv6Pool } from "./ipv6pool";



export class DescribeIpv6PoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Ipv6Pool })
  ipv6Pools?: Ipv6Pool[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
