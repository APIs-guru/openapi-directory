import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentMember } from "./environmentmember";



export class UpdateEnvironmentMembershipResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: EnvironmentMember;
}
