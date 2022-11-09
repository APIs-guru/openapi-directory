import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventIntegrationAssociation
/** 
 * The event integration association.
**/
export class EventIntegrationAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientAssociationMetadata" })
  clientAssociationMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=EventBridgeRuleName" })
  eventBridgeRuleName?: string;

  @Metadata({ data: "json, name=EventIntegrationAssociationArn" })
  eventIntegrationAssociationArn?: string;

  @Metadata({ data: "json, name=EventIntegrationAssociationId" })
  eventIntegrationAssociationId?: string;

  @Metadata({ data: "json, name=EventIntegrationName" })
  eventIntegrationName?: string;
}
