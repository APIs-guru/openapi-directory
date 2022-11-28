import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceDataColumnProperties
/** 
 * An object that contains the properties for importing data to a specific column in a table.
**/
export class SourceDataColumnProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;
}
