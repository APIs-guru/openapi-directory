import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StaticValue
/** 
 * The static value of the resource.
**/
export class StaticValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
