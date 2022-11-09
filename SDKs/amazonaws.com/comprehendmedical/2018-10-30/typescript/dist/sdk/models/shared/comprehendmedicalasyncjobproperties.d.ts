import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
/**
 * Provides information about a detection job.
**/
export declare class ComprehendMedicalAsyncJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    expirationTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    kmsKey?: string;
    languageCode?: LanguageCodeEnum;
    manifestFilePath?: string;
    message?: string;
    modelVersion?: string;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
}
