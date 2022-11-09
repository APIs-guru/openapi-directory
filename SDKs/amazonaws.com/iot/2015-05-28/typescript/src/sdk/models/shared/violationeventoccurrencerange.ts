import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ViolationEventOccurrenceRange
/** 
 *  Specifies the time period of which violation events occurred between. 
**/
export class ViolationEventOccurrenceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;
}
