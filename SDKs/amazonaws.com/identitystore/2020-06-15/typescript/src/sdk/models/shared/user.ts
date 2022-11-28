import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * A user object, which contains a specified user’s metadata and attributes.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
