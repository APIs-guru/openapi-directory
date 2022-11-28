import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetProfileResponse
/** 
 * The structure representing the getProfileResponse.
**/
export class GetProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: string;
}
