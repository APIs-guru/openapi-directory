import { SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";
export declare class ContentSubmissionSharedBusinessEntitiesContentSubmission extends SpeakeasyBase {
    attributes?: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[];
    contentDefinitionId?: number;
    contentSubmissionId?: number;
    definition?: ContentSubmissionSharedBusinessEntitiesContentDefinition;
    jobRunId?: number;
    packageId?: string;
    releaseNotes?: string;
    repository?: string;
    revision?: number;
    submissionDate?: Date;
    userId?: number;
    version?: number;
}
