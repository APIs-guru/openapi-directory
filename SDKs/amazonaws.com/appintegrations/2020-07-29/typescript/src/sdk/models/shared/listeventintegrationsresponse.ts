import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventIntegration } from "./eventintegration";



export class ListEventIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventIntegrations", elemType: EventIntegration })
  eventIntegrations?: EventIntegration[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
