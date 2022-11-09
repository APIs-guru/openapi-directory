import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
export declare class ListFhirExportJobsRequest extends SpeakeasyBase {
    datastoreId: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    maxResults?: number;
    nextToken?: string;
    submittedAfter?: Date;
    submittedBefore?: Date;
}
