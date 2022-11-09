import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentMember } from "./environmentmember";


export class CreateEnvironmentMembershipResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=membership" })
  membership: EnvironmentMember;
}
