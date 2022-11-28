import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";
/**
 * Describes an individual setting that controls some aspect of ElastiCache behavior.
**/
export declare class Parameter extends SpeakeasyBase {
    allowedValues?: string;
    changeType?: ChangeTypeEnum;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    minimumEngineVersion?: string;
    parameterName?: string;
    parameterValue?: string;
    source?: string;
}
