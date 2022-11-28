import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfileTime
/** 
 *  Contains the start time of a profile. 
**/
export class ProfileTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
