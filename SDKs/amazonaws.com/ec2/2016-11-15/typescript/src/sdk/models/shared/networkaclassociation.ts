import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkAclAssociation
/** 
 * Describes an association between a network ACL and a subnet.
**/
export class NetworkAclAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkAclAssociationId?: string;

  @SpeakeasyMetadata()
  networkAclId?: string;

  @SpeakeasyMetadata()
  subnetId?: string;
}
