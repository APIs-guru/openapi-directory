import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
/**
 * Provides information about an events detection job.
**/
export declare class EventsDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    languageCode?: LanguageCodeEnum;
    message?: string;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
    targetEventTypes?: string[];
}
