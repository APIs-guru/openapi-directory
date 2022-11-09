import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=NewPassword" })
  newPassword: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
