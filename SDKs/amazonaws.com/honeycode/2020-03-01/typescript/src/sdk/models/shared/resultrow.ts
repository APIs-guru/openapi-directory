import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataItem } from "./dataitem";



// ResultRow
/** 
 * A single row in the ResultSet.
**/
export class ResultRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataItems", elemType: DataItem })
  dataItems: DataItem[];

  @SpeakeasyMetadata({ data: "json, name=rowId" })
  rowId?: string;
}
