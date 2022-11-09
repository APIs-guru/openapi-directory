import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InspectorEventEnum } from "./inspectoreventenum";


export class UnsubscribeFromEventRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=topicArn" })
  topicArn: string;
}
