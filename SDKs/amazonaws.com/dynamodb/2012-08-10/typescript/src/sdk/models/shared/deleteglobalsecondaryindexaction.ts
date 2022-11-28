import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteGlobalSecondaryIndexAction
/** 
 * Represents a global secondary index to be deleted from an existing table.
**/
export class DeleteGlobalSecondaryIndexAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;
}
