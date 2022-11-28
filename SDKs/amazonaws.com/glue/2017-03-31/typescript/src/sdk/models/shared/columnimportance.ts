import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColumnImportance
/** 
 * <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
**/
export class ColumnImportance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @SpeakeasyMetadata({ data: "json, name=Importance" })
  importance?: number;
}
