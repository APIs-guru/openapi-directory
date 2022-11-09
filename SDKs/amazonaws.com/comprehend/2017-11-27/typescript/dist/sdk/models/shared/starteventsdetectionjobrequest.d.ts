import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { Tag } from "./tag";
export declare class StartEventsDetectionJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    languageCode: LanguageCodeEnum;
    outputDataConfig: OutputDataConfig;
    tags?: Tag[];
    targetEventTypes: string[];
}
