import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConformancePackInputParameter
/** 
 * Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
**/
export class ConformancePackInputParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterValue" })
  parameterValue: string;
}
