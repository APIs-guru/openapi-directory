import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


export class EnableUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
