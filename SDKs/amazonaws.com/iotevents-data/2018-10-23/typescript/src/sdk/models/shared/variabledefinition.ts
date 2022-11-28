import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VariableDefinition
/** 
 * The new value of the variable.
**/
export class VariableDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
