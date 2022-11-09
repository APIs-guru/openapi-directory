import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateGroupClientRelationship extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active, form, name=Active;" })
  active?: boolean;

  @Metadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @Metadata({ data: "json, name=LastCheckin, form, name=LastCheckin;" })
  lastCheckin?: Date;

  @Metadata({ data: "json, name=RelationshipID, form, name=RelationshipID;" })
  relationshipId?: string;

  @Metadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;
}
