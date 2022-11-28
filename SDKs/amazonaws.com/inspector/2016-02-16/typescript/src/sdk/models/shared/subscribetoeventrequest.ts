import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";



export class SubscribeToEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=topicArn" })
  topicArn: string;
}
