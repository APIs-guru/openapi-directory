import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datum } from "./datum";



// Row
/** 
 * The rows that comprise a query result table.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data", elemType: Datum })
  data?: Datum[];
}
