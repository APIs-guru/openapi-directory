import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
