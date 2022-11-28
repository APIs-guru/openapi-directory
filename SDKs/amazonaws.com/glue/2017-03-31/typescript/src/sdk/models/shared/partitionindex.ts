import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartitionIndex
/** 
 * A structure for a partition index.
**/
export class PartitionIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=Keys" })
  keys: string[];
}
