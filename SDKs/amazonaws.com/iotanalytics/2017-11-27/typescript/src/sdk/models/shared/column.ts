import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Column
/** 
 * Contains information about a column that stores your data.
**/
export class Column extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
