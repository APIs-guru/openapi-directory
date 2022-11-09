import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Column
/** 
 * Contains metadata for a column in a table.
**/
export class Column extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
