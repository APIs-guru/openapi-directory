import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VariableDefinition
/** 
 * The new value of the variable.
**/
export class VariableDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
