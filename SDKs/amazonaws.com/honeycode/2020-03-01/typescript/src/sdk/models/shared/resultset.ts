import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnMetadata } from "./columnmetadata";
import { ResultRow } from "./resultrow";


// ResultSet
/** 
 *  ResultSet contains the results of the request for a single block or list defined on the screen. 
**/
export class ResultSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.ColumnMetadata })
  headers: ColumnMetadata[];

  @Metadata({ data: "json, name=rows", elemType: shared.ResultRow })
  rows: ResultRow[];
}
