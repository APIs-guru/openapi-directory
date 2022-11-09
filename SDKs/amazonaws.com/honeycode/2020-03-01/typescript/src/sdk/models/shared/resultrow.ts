import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataItem } from "./dataitem";


// ResultRow
/** 
 * A single row in the ResultSet.
**/
export class ResultRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataItems", elemType: shared.DataItem })
  dataItems: DataItem[];

  @Metadata({ data: "json, name=rowId" })
  rowId?: string;
}
