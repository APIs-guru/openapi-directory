import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";
/**
 * Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export declare class ContinuousParameterRange extends SpeakeasyBase {
    maxValue: number;
    minValue: number;
    name: string;
    scalingType?: ScalingTypeEnum;
}
