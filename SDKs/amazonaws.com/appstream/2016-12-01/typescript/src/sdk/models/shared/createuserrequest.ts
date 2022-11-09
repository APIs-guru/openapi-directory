import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { MessageActionEnum } from "./messageactionenum";


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MessageAction" })
  messageAction?: MessageActionEnum;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
