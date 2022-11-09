import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartitionInput } from "./partitioninput";


// BatchUpdatePartitionRequestEntry
/** 
 * A structure that contains the values and structure used to update a partition.
**/
export class BatchUpdatePartitionRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=PartitionInput" })
  partitionInput: PartitionInput;

  @Metadata({ data: "json, name=PartitionValueList" })
  partitionValueList: string[];
}
