import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
