import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDestination } from "./cloudwatchdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { SnsDestination } from "./snsdestination";
/**
 * <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
export declare class EventDestination extends SpeakeasyBase {
    cloudWatchDestination?: CloudWatchDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: KinesisFirehoseDestination;
    matchingEventTypes: EventTypeEnum[];
    name: string;
    snsDestination?: SnsDestination;
}
