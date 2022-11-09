import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @Metadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
