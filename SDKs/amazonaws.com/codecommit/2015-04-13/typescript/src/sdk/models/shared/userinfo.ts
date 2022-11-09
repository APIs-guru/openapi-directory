import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserInfo
/** 
 * Information about the user who made a specified commit.
**/
export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
