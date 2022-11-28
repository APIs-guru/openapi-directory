import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartitionValueList
/** 
 * Contains a list of values defining partitions.
**/
export class PartitionValueList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
