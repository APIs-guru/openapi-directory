import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileTime } from "./profiletime";



// ListProfileTimesResponse
/** 
 * The structure representing the listProfileTimesResponse.
**/
export class ListProfileTimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=profileTimes", elemType: ProfileTime })
  profileTimes: ProfileTime[];
}
