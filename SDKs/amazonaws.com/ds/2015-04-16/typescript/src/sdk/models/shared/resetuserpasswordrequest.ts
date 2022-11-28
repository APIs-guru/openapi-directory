import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=NewPassword" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
