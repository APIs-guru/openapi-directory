import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpsertActionEnum } from "./upsertactionenum";


// UpsertRowsResult
/** 
 *  An object that represents the result of a single upsert row request. 
**/
export class UpsertRowsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowIds" })
  rowIds: string[];

  @Metadata({ data: "json, name=upsertAction" })
  upsertAction: UpsertActionEnum;
}
