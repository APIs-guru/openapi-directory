import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoricalParameterRange
/** 
 * Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export class CategoricalParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
