import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupDetail } from "./groupdetail";
import { ManagedPolicyDetail } from "./managedpolicydetail";
import { RoleDetail } from "./roledetail";
import { UserDetail } from "./userdetail";



// GetAccountAuthorizationDetailsResponse
/** 
 * Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
**/
export class GetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GroupDetail })
  groupDetailList?: GroupDetail[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ManagedPolicyDetail })
  policies?: ManagedPolicyDetail[];

  @SpeakeasyMetadata({ elemType: RoleDetail })
  roleDetailList?: RoleDetail[];

  @SpeakeasyMetadata({ elemType: UserDetail })
  userDetailList?: UserDetail[];
}
