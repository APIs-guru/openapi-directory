import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CellInput
/** 
 *  CellInput object contains the data needed to create or update cells in a table. 
**/
export class CellInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fact" })
  fact?: string;
}
