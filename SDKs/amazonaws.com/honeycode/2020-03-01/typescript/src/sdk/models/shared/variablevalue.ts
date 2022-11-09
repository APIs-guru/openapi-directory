import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VariableValue
/** 
 * The input variables to the app to be used by the InvokeScreenAutomation action request.
**/
export class VariableValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawValue" })
  rawValue: string;
}
