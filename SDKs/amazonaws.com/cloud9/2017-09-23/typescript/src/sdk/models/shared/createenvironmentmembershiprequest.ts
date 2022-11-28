import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberPermissionsEnum } from "./memberpermissionsenum";



export class CreateEnvironmentMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: MemberPermissionsEnum;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
