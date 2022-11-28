import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Column
/** 
 * Contains information about a column that stores your data.
**/
export class Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
