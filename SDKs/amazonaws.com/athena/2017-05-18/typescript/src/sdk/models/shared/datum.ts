import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Datum
/** 
 * A piece of data (a field in the table).
**/
export class Datum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VarCharValue" })
  varCharValue?: string;
}
