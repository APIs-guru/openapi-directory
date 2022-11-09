import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesContentReleaseVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentDefinitionID, form, name=ContentDefinitionID;" })
  contentDefinitionId?: number;

  @Metadata({ data: "json, name=ContentReleaseID, form, name=ContentReleaseID;" })
  contentReleaseId?: number;

  @Metadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @Metadata({ data: "json, name=PublisherUserID, form, name=PublisherUserID;" })
  publisherUserId?: number;

  @Metadata({ data: "json, name=ReleaseID, form, name=ReleaseID;" })
  releaseId?: number;

  @Metadata({ data: "json, name=TestReportUrl, form, name=TestReportUrl;" })
  testReportUrl?: string;

  @Metadata({ data: "json, name=UpdatedDate, form, name=UpdatedDate;" })
  updatedDate?: Date;

  @Metadata({ data: "json, name=Version, form, name=Version;" })
  version?: number;
}
