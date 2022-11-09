import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * A user object, which contains a specified user’s metadata and attributes.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserId" })
  userId: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
