import { SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";
/**
 * Represents the response from the server to the request to create the user.
**/
export declare class AdminCreateUserResponse extends SpeakeasyBase {
    user?: UserType;
}
