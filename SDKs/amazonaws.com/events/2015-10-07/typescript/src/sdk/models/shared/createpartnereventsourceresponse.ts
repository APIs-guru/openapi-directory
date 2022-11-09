import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePartnerEventSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;
}
