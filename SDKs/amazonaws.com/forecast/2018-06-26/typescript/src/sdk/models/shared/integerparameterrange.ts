import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";



// IntegerParameterRange
/** 
 * Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export class IntegerParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue: number;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingType" })
  scalingType?: ScalingTypeEnum;
}
