import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Variable
/** 
 * The current state of the variable.
**/
export class Variable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
