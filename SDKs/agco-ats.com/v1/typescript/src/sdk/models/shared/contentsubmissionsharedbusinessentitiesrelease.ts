import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesRelease extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildDate, form, name=BuildDate;" })
  buildDate?: Date;

  @Metadata({ data: "json, name=ReleaseDate, form, name=ReleaseDate;" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=ReleaseID, form, name=ReleaseID;" })
  releaseId?: number;

  @Metadata({ data: "json, name=ReleaseNumber, form, name=ReleaseNumber;" })
  releaseNumber?: string;

  @Metadata({ data: "json, name=Visible, form, name=Visible;" })
  visible?: boolean;
}
