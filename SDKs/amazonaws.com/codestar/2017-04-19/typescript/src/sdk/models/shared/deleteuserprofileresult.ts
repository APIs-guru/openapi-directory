import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
