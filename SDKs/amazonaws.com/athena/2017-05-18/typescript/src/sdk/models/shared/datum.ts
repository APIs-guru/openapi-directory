import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Datum
/** 
 * A piece of data (a field in the table).
**/
export class Datum extends SpeakeasyBase {
  @Metadata({ data: "json, name=VarCharValue" })
  varCharValue?: string;
}
