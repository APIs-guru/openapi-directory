import { SpeakeasyBase } from "../../../internal/utils";
import { Ipv6CidrAssociation } from "./ipv6cidrassociation";
export declare class GetAssociatedIpv6PoolCidrsResult extends SpeakeasyBase {
    ipv6CidrAssociations?: Ipv6CidrAssociation[];
    nextToken?: string;
}
