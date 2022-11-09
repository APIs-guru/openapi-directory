import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEnvironmentMembershipRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
