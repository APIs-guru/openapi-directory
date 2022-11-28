import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class StartSentimentDetectionJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    languageCode: LanguageCodeEnum;
    outputDataConfig: OutputDataConfig;
    tags?: Tag[];
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
