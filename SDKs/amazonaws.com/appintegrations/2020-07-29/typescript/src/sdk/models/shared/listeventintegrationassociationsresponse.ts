import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventIntegrationAssociation } from "./eventintegrationassociation";



export class ListEventIntegrationAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventIntegrationAssociations", elemType: EventIntegrationAssociation })
  eventIntegrationAssociations?: EventIntegrationAssociation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
