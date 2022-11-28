import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
import { ResultRow } from "./resultrow";



// ResultSet
/** 
 *  ResultSet contains the results of the request for a single block or list defined on the screen. 
**/
export class ResultSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: ColumnMetadata })
  headers: ColumnMetadata[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: ResultRow })
  rows: ResultRow[];
}
