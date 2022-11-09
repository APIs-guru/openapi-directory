import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartitionValueList
/** 
 * Contains a list of values defining partitions.
**/
export class PartitionValueList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Values" })
  values: string[];
}
