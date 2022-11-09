import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";


// IntegerParameterRange
/** 
 * Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export class IntegerParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue: number;

  @Metadata({ data: "json, name=MinValue" })
  minValue: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScalingType" })
  scalingType?: ScalingTypeEnum;
}
