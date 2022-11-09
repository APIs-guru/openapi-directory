import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Variable
/** 
 * The current state of the variable.
**/
export class Variable extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
