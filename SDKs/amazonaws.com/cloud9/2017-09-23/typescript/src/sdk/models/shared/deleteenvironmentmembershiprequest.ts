import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
