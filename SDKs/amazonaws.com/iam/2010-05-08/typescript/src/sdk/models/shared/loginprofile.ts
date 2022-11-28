import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoginProfile
/** 
 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
**/
export class LoginProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  passwordResetRequired?: boolean;

  @SpeakeasyMetadata()
  userName: string;
}
