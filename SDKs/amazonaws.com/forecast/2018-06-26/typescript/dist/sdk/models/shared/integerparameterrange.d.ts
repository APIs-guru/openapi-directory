import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";
/**
 * Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export declare class IntegerParameterRange extends SpeakeasyBase {
    maxValue: number;
    minValue: number;
    name: string;
    scalingType?: ScalingTypeEnum;
}
