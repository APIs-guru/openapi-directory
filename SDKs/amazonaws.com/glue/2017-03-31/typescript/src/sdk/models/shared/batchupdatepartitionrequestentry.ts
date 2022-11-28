import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";



// BatchUpdatePartitionRequestEntry
/** 
 * A structure that contains the values and structure used to update a partition.
**/
export class BatchUpdatePartitionRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PartitionInput" })
  partitionInput: PartitionInput;

  @SpeakeasyMetadata({ data: "json, name=PartitionValueList" })
  partitionValueList: string[];
}
