import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CellInput
/** 
 *  CellInput object contains the data needed to create or update cells in a table. 
**/
export class CellInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=fact" })
  fact?: string;
}
