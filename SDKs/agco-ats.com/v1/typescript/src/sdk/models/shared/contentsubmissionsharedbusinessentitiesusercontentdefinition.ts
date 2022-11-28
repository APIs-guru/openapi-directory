import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesUserContentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserContentDefinitionID, form, name=UserContentDefinitionID;" })
  userContentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;
}
