import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
