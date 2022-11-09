import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoricalParameterRange } from "./categoricalparameterrange";
import { ContinuousParameterRange } from "./continuousparameterrange";
import { IntegerParameterRange } from "./integerparameterrange";


// ParameterRanges
/** 
 * Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
**/
export class ParameterRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoricalParameterRanges", elemType: shared.CategoricalParameterRange })
  categoricalParameterRanges?: CategoricalParameterRange[];

  @Metadata({ data: "json, name=ContinuousParameterRanges", elemType: shared.ContinuousParameterRange })
  continuousParameterRanges?: ContinuousParameterRange[];

  @Metadata({ data: "json, name=IntegerParameterRanges", elemType: shared.IntegerParameterRange })
  integerParameterRanges?: IntegerParameterRange[];
}
