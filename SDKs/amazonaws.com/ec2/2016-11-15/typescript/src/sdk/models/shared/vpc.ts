import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockAssociation } from "./vpccidrblockassociation";
import { TenancyEnum } from "./tenancyenum";
import { VpcIpv6CidrBlockAssociation } from "./vpcipv6cidrblockassociation";
import { VpcStateEnum } from "./vpcstateenum";
import { Tag } from "./tag";



// Vpc
/** 
 * Describes a VPC.
**/
export class Vpc extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: string;

  @SpeakeasyMetadata({ elemType: VpcCidrBlockAssociation })
  cidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  @SpeakeasyMetadata()
  dhcpOptionsId?: string;

  @SpeakeasyMetadata()
  instanceTenancy?: TenancyEnum;

  @SpeakeasyMetadata({ elemType: VpcIpv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: VpcStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
