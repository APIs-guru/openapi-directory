import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventIntegrationAssociation
/** 
 * The event integration association.
**/
export class EventIntegrationAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientAssociationMetadata" })
  clientAssociationMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBridgeRuleName" })
  eventBridgeRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventIntegrationAssociationArn" })
  eventIntegrationAssociationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EventIntegrationAssociationId" })
  eventIntegrationAssociationId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventIntegrationName" })
  eventIntegrationName?: string;
}
