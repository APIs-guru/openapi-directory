import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Record
/** 
 * The unit of data in a delivery stream.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;
}
