import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberPermissionsEnum } from "./memberpermissionsenum";



export class UpdateEnvironmentMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: MemberPermissionsEnum;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
