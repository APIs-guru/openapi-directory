import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentSubmissionID, form, name=ContentSubmissionID;" })
  contentSubmissionId?: number;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
