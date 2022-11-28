import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpsertActionEnum } from "./upsertactionenum";



// UpsertRowsResult
/** 
 *  An object that represents the result of a single upsert row request. 
**/
export class UpsertRowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowIds" })
  rowIds: string[];

  @SpeakeasyMetadata({ data: "json, name=upsertAction" })
  upsertAction: UpsertActionEnum;
}
