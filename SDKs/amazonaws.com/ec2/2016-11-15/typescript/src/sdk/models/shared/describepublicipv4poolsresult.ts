import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicIpv4Pool } from "./publicipv4pool";



export class DescribePublicIpv4PoolsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PublicIpv4Pool })
  publicIpv4Pools?: PublicIpv4Pool[];
}
