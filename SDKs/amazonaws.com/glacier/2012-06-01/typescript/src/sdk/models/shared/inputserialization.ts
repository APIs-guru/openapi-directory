import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvInput } from "./csvinput";


// InputSerialization
/** 
 * Describes how the archive is serialized.
**/
export class InputSerialization extends SpeakeasyBase {
  @Metadata({ data: "json, name=csv" })
  csv?: CsvInput;
}
