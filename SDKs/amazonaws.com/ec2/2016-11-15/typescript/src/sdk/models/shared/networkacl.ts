import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkAclAssociation } from "./networkaclassociation";
import { NetworkAclEntry } from "./networkaclentry";
import { Tag } from "./tag";



// NetworkAcl
/** 
 * Describes a network ACL.
**/
export class NetworkAcl extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkAclAssociation })
  associations?: NetworkAclAssociation[];

  @SpeakeasyMetadata({ elemType: NetworkAclEntry })
  entries?: NetworkAclEntry[];

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  networkAclId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
