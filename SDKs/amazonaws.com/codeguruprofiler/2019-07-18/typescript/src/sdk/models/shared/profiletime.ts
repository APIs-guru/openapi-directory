import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfileTime
/** 
 *  Contains the start time of a profile. 
**/
export class ProfileTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=start" })
  start?: Date;
}
