import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deserializer } from "./deserializer";



// InputFormatConfiguration
/** 
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
**/
export class InputFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deserializer" })
  deserializer?: Deserializer;
}
