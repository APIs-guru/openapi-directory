import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesRelease extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildDate, form, name=BuildDate;" })
  buildDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReleaseDate, form, name=ReleaseDate;" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReleaseID, form, name=ReleaseID;" })
  releaseId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReleaseNumber, form, name=ReleaseNumber;" })
  releaseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Visible, form, name=Visible;" })
  visible?: boolean;
}
