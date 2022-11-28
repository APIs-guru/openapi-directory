import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterValue
/** 
 * A value or list of parameter values. 
**/
export class ParameterValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue: string;
}
