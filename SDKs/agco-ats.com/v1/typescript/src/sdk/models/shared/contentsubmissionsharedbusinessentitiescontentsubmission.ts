import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";



export class ContentSubmissionSharedBusinessEntitiesContentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute })
  attributes?: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[];

  @SpeakeasyMetadata({ data: "json, name=ContentDefinitionID" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=ContentSubmissionID" })
  contentSubmissionId?: number;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: ContentSubmissionSharedBusinessEntitiesContentDefinition;

  @SpeakeasyMetadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=PackageID" })
  packageId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseNotes" })
  releaseNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=Repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=SubmissionDate" })
  submissionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
