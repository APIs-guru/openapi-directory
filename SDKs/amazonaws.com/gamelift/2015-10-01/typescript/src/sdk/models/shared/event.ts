import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventCodeEnum } from "./eventcodeenum";


// Event
/** 
 * <p>Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetEvents</a> </p>
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventCode" })
  eventCode?: EventCodeEnum;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;

  @Metadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PreSignedLogUrl" })
  preSignedLogUrl?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
