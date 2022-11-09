import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StaticValue
/** 
 * The static value of the resource.
**/
export class StaticValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Values" })
  values: string[];
}
