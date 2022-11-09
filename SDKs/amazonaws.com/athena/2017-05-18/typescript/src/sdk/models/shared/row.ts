import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Datum } from "./datum";


// Row
/** 
 * The rows that comprise a query result table.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data", elemType: shared.Datum })
  data?: Datum[];
}
