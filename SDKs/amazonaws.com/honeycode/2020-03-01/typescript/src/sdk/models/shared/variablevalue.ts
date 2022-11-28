import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VariableValue
/** 
 * The input variables to the app to be used by the InvokeScreenAutomation action request.
**/
export class VariableValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawValue" })
  rawValue: string;
}
