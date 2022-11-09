import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartitionIndex
/** 
 * A structure for a partition index.
**/
export class PartitionIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=Keys" })
  keys: string[];
}
