import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvOutput } from "./csvoutput";


// OutputSerialization
/** 
 * Describes how the select output is serialized.
**/
export class OutputSerialization extends SpeakeasyBase {
  @Metadata({ data: "json, name=csv" })
  csv?: CsvOutput;
}
