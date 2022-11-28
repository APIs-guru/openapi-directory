import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserInfo
/** 
 * Information about the user who made a specified commit.
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
