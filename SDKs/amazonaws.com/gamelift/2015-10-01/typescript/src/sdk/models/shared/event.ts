import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCodeEnum } from "./eventcodeenum";



// Event
/** 
 * <p>Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetEvents</a> </p>
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventCode" })
  eventCode?: EventCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PreSignedLogUrl" })
  preSignedLogUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
