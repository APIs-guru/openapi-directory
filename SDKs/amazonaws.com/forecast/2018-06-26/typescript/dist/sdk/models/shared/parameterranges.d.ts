import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoricalParameterRange } from "./categoricalparameterrange";
import { ContinuousParameterRange } from "./continuousparameterrange";
import { IntegerParameterRange } from "./integerparameterrange";
/**
 * Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
**/
export declare class ParameterRanges extends SpeakeasyBase {
    categoricalParameterRanges?: CategoricalParameterRange[];
    continuousParameterRanges?: ContinuousParameterRange[];
    integerParameterRanges?: IntegerParameterRange[];
}
