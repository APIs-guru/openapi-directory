import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterNameValue
/** 
 * An individual DAX parameter.
**/
export class ParameterNameValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;
}
