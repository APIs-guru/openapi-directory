import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";


export class ContentSubmissionSharedBusinessEntitiesContentSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute })
  attributes?: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[];

  @Metadata({ data: "json, name=ContentDefinitionID" })
  contentDefinitionId?: number;

  @Metadata({ data: "json, name=ContentSubmissionID" })
  contentSubmissionId?: number;

  @Metadata({ data: "json, name=Definition" })
  definition?: ContentSubmissionSharedBusinessEntitiesContentDefinition;

  @Metadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @Metadata({ data: "json, name=PackageID" })
  packageId?: string;

  @Metadata({ data: "json, name=ReleaseNotes" })
  releaseNotes?: string;

  @Metadata({ data: "json, name=Repository" })
  repository?: string;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=SubmissionDate" })
  submissionDate?: Date;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
