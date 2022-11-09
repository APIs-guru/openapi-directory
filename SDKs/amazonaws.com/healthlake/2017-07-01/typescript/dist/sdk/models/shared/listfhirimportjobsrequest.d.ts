import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class ListFhirImportJobsRequest extends SpeakeasyBase {
    datastoreId: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    maxResults?: number;
    nextToken?: string;
    submittedAfter?: Date;
    submittedBefore?: Date;
}
