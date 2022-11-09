import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";
/**
 * Provides information about an entities detection job.
**/
export declare class EntitiesDetectionJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    entityRecognizerArn?: string;
    inputDataConfig?: InputDataConfig;
    jobArn?: string;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    languageCode?: LanguageCodeEnum;
    message?: string;
    outputDataConfig?: OutputDataConfig;
    submitTime?: Date;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
