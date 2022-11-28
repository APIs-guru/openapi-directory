import { SpeakeasyBase } from "../../../internal/utils";
import { PublicIpv4Pool } from "./publicipv4pool";
export declare class DescribePublicIpv4PoolsResult extends SpeakeasyBase {
    nextToken?: string;
    publicIpv4Pools?: PublicIpv4Pool[];
}
