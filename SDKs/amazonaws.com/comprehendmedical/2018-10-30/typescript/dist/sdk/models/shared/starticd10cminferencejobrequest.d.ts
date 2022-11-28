import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartIcd10CmInferenceJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    kmsKey?: string;
    languageCode: LanguageCodeEnum;
    outputDataConfig: OutputDataConfig;
}
