import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateGroupClientRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active, form, name=Active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=LastCheckin, form, name=LastCheckin;" })
  lastCheckin?: Date;

  @SpeakeasyMetadata({ data: "json, name=RelationshipID, form, name=RelationshipID;" })
  relationshipId?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;
}
