import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoricalParameterRange
/** 
 * Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
export class CategoricalParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
