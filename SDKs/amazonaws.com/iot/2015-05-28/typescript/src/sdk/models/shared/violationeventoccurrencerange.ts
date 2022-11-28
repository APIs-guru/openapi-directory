import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ViolationEventOccurrenceRange
/** 
 *  Specifies the time period of which violation events occurred between. 
**/
export class ViolationEventOccurrenceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;
}
