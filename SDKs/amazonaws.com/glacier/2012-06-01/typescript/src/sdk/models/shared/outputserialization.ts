import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvOutput } from "./csvoutput";



// OutputSerialization
/** 
 * Describes how the select output is serialized.
**/
export class OutputSerialization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csv" })
  csv?: CsvOutput;
}
