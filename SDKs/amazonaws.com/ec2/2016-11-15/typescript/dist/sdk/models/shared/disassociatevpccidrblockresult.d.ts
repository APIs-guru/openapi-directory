import { SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockAssociation } from "./vpccidrblockassociation";
import { VpcIpv6CidrBlockAssociation } from "./vpcipv6cidrblockassociation";
export declare class DisassociateVpcCidrBlockResult extends SpeakeasyBase {
    cidrBlockAssociation?: VpcCidrBlockAssociation;
    ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;
    vpcId?: string;
}
