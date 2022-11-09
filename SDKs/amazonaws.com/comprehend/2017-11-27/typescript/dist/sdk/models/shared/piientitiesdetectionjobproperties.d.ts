import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { PiiEntitiesDetectionModeEnum } from "./piientitiesdetectionmodeenum";
import { PiiOutputDataConfig } from "./piioutputdataconfig";
import { RedactionConfig } from "./redactionconfig";
/**
 * Provides information about a PII entities detection job.
**/
export declare class PiiEntitiesDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    languageCode?: LanguageCodeEnum;
    message?: string;
    mode?: PiiEntitiesDetectionModeEnum;
    outputDataConfig?: PiiOutputDataConfig;
    redactionConfig?: RedactionConfig;
    submitTime?: Date;
}
