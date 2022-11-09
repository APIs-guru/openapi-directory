import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventIntegration } from "./eventintegration";


export class ListEventIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventIntegrations", elemType: shared.EventIntegration })
  eventIntegrations?: EventIntegration[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
