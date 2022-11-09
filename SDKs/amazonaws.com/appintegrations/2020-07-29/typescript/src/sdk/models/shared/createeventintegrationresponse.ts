import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventIntegrationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventIntegrationArn" })
  eventIntegrationArn?: string;
}
