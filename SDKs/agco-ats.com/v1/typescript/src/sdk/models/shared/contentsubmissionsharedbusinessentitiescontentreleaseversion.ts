import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesContentReleaseVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=ContentReleaseID, form, name=ContentReleaseID;" })
  contentReleaseId?: number;

  @SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PublisherUserID, form, name=PublisherUserID;" })
  publisherUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReleaseID, form, name=ReleaseID;" })
  releaseId?: number;

  @SpeakeasyMetadata({ data: "json, name=TestReportUrl, form, name=TestReportUrl;" })
  testReportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate, form, name=UpdatedDate;" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Version, form, name=Version;" })
  version?: number;
}
