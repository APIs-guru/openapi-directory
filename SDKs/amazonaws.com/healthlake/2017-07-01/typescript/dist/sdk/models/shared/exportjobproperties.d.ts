import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
/**
 * The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
**/
export declare class ExportJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    datastoreId: string;
    endTime?: Date;
    jobId: string;
    jobName?: string;
    jobStatus: JobStatusEnum;
    message?: string;
    outputDataConfig: OutputDataConfig;
    submitTime: Date;
}
