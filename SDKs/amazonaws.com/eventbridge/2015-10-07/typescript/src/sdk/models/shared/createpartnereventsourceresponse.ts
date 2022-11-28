import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePartnerEventSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;
}
