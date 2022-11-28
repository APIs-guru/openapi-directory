import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentMember } from "./environmentmember";



export class CreateEnvironmentMembershipResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership: EnvironmentMember;
}
