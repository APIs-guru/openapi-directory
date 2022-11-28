import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



// UserStackAssociation
/** 
 * Describes a user in the user pool and the associated stack.
**/
export class UserStackAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SendEmailNotification" })
  sendEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
