import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeToLiveStatusEnum } from "./timetolivestatusenum";


// TimeToLiveDescription
/** 
 * The description of the Time to Live (TTL) status on the specified table. 
**/
export class TimeToLiveDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=TimeToLiveStatus" })
  timeToLiveStatus?: TimeToLiveStatusEnum;
}
