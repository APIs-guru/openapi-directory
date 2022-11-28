import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyGroup } from "./policygroup";
import { PolicyRole } from "./policyrole";
import { PolicyUser } from "./policyuser";



// ListEntitiesForPolicyResponse
/** 
 * Contains the response to a successful <a>ListEntitiesForPolicy</a> request. 
**/
export class ListEntitiesForPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: PolicyGroup })
  policyGroups?: PolicyGroup[];

  @SpeakeasyMetadata({ elemType: PolicyRole })
  policyRoles?: PolicyRole[];

  @SpeakeasyMetadata({ elemType: PolicyUser })
  policyUsers?: PolicyUser[];
}
