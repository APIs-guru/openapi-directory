import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceSecurityGroup
/** 
 * Information about a source security group.
**/
export class SourceSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata()
  ownerAlias?: string;
}
