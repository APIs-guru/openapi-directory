import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { PiiEntitiesDetectionModeEnum } from "./piientitiesdetectionmodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { RedactionConfig } from "./redactionconfig";
import { Tag } from "./tag";
export declare class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    languageCode: LanguageCodeEnum;
    mode: PiiEntitiesDetectionModeEnum;
    outputDataConfig: OutputDataConfig;
    redactionConfig?: RedactionConfig;
    tags?: Tag[];
}
