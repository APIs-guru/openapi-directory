import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Record
/** 
 * The unit of data in a delivery stream.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;
}
