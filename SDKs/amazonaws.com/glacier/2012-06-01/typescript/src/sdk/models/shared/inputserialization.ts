import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvInput } from "./csvinput";



// InputSerialization
/** 
 * Describes how the archive is serialized.
**/
export class InputSerialization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csv" })
  csv?: CsvInput;
}
