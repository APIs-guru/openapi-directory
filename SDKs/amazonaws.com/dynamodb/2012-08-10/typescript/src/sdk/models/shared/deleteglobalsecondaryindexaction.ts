import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteGlobalSecondaryIndexAction
/** 
 * Represents a global secondary index to be deleted from an existing table.
**/
export class DeleteGlobalSecondaryIndexAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;
}
