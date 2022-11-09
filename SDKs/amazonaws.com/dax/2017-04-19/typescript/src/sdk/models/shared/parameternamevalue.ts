import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterNameValue
/** 
 * An individual DAX parameter.
**/
export class ParameterNameValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;
}
