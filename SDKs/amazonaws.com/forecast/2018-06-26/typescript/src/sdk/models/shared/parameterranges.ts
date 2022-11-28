import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoricalParameterRange } from "./categoricalparameterrange";
import { ContinuousParameterRange } from "./continuousparameterrange";
import { IntegerParameterRange } from "./integerparameterrange";



// ParameterRanges
/** 
 * Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
**/
export class ParameterRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoricalParameterRanges", elemType: CategoricalParameterRange })
  categoricalParameterRanges?: CategoricalParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=ContinuousParameterRanges", elemType: ContinuousParameterRange })
  continuousParameterRanges?: ContinuousParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=IntegerParameterRanges", elemType: IntegerParameterRange })
  integerParameterRanges?: IntegerParameterRange[];
}
