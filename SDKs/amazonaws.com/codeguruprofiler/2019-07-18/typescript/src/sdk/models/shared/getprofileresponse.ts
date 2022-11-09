import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetProfileResponse
/** 
 * The structure representing the getProfileResponse.
**/
export class GetProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=profile" })
  profile: string;
}
