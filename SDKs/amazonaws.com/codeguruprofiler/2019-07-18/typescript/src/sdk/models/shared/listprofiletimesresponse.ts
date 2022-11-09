import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfileTime } from "./profiletime";


// ListProfileTimesResponse
/** 
 * The structure representing the listProfileTimesResponse.
**/
export class ListProfileTimesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=profileTimes", elemType: shared.ProfileTime })
  profileTimes: ProfileTime[];
}
