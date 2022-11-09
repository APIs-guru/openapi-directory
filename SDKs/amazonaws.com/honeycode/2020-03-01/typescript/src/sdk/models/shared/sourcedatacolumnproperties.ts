import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceDataColumnProperties
/** 
 * An object that contains the properties for importing data to a specific column in a table.
**/
export class SourceDataColumnProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;
}
