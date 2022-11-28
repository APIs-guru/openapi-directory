import { SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnectionVpcInfo } from "./vpcpeeringconnectionvpcinfo";
import { VpcPeeringConnectionStateReason } from "./vpcpeeringconnectionstatereason";
import { Tag } from "./tag";
/**
 * Describes a VPC peering connection.
**/
export declare class VpcPeeringConnection extends SpeakeasyBase {
    accepterVpcInfo?: VpcPeeringConnectionVpcInfo;
    expirationTime?: Date;
    requesterVpcInfo?: VpcPeeringConnectionVpcInfo;
    status?: VpcPeeringConnectionStateReason;
    tags?: Tag[];
    vpcPeeringConnectionId?: string;
}
