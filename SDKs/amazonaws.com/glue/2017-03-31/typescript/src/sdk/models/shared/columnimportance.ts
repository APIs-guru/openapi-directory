import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ColumnImportance
/** 
 * <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
**/
export class ColumnImportance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @Metadata({ data: "json, name=Importance" })
  importance?: number;
}
