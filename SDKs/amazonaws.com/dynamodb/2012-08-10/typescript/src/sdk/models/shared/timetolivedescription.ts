import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveStatusEnum } from "./timetolivestatusenum";



// TimeToLiveDescription
/** 
 * The description of the Time to Live (TTL) status on the specified table. 
**/
export class TimeToLiveDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeToLiveStatus" })
  timeToLiveStatus?: TimeToLiveStatusEnum;
}
