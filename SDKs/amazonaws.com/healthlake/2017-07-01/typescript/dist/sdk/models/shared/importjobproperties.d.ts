import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.
**/
export declare class ImportJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    datastoreId: string;
    endTime?: Date;
    inputDataConfig: InputDataConfig;
    jobId: string;
    jobName?: string;
    jobOutputDataConfig?: OutputDataConfig;
    jobStatus: JobStatusEnum;
    message?: string;
    submitTime: Date;
}
