import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrefixListAssociation
/** 
 * Describes the resource with which a prefix list is associated.
**/
export class PrefixListAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceOwner?: string;
}
