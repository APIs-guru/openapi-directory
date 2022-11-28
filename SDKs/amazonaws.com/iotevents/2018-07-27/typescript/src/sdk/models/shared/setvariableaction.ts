import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetVariableAction
/** 
 * Information about the variable and its new value.
**/
export class SetVariableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=variableName" })
  variableName: string;
}
