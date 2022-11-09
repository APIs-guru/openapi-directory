import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
