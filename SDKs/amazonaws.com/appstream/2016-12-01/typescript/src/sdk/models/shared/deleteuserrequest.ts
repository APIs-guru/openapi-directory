import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



export class DeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
