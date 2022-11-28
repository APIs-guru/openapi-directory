import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventIntegrationArn" })
  eventIntegrationArn?: string;
}
