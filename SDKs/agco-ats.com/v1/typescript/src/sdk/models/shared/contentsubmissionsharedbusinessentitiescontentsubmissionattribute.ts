import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentSubmissionID, form, name=ContentSubmissionID;" })
  contentSubmissionId?: number;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @Metadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
