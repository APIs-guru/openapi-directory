import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Column
/** 
 * Contains metadata for a column in a table.
**/
export class Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
