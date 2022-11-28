import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnectionVpcInfo } from "./vpcpeeringconnectionvpcinfo";
import { VpcPeeringConnectionStateReason } from "./vpcpeeringconnectionstatereason";
import { Tag } from "./tag";



// VpcPeeringConnection
/** 
 * Describes a VPC peering connection.
**/
export class VpcPeeringConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  @SpeakeasyMetadata()
  expirationTime?: Date;

  @SpeakeasyMetadata()
  requesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  @SpeakeasyMetadata()
  status?: VpcPeeringConnectionStateReason;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
