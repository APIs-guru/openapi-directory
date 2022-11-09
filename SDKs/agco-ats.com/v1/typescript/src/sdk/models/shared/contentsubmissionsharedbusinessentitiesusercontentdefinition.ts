import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesUserContentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @Metadata({ data: "json, name=UserContentDefinitionID, form, name=UserContentDefinitionID;" })
  userContentDefinitionId?: number;

  @Metadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;
}
