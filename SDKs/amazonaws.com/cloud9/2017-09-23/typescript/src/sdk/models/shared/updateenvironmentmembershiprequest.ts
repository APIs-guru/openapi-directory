import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberPermissionsEnum } from "./memberpermissionsenum";


export class UpdateEnvironmentMembershipRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;

  @Metadata({ data: "json, name=permissions" })
  permissions: MemberPermissionsEnum;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
