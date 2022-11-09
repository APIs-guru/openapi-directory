import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


// UserStackAssociation
/** 
 * Describes a user in the user pool and the associated stack.
**/
export class UserStackAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=SendEmailNotification" })
  sendEmailNotification?: boolean;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
