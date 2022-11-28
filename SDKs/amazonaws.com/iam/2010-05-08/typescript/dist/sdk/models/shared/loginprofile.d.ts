import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
**/
export declare class LoginProfile extends SpeakeasyBase {
    createDate: Date;
    passwordResetRequired?: boolean;
    userName: string;
}
