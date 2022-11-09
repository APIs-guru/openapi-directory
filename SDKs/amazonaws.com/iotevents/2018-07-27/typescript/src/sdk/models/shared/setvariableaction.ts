import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetVariableAction
/** 
 * Information about the variable and its new value.
**/
export class SetVariableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;

  @Metadata({ data: "json, name=variableName" })
  variableName: string;
}
