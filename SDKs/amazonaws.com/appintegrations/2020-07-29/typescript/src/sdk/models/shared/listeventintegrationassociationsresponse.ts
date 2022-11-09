import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventIntegrationAssociation } from "./eventintegrationassociation";


export class ListEventIntegrationAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventIntegrationAssociations", elemType: shared.EventIntegrationAssociation })
  eventIntegrationAssociations?: EventIntegrationAssociation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
