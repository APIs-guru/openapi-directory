import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventFilter } from "./eventfilter";


// EventIntegration
/** 
 * The event integration.
**/
export class EventIntegration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventBridgeBus" })
  eventBridgeBus?: string;

  @Metadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilter;

  @Metadata({ data: "json, name=EventIntegrationArn" })
  eventIntegrationArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
