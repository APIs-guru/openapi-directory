import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";



export class GetEventIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBridgeBus" })
  eventBridgeBus?: string;

  @SpeakeasyMetadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilter;

  @SpeakeasyMetadata({ data: "json, name=EventIntegrationArn" })
  eventIntegrationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
