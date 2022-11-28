import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";
/**
 * A structure that contains the values and structure used to update a partition.
**/
export declare class BatchUpdatePartitionRequestEntry extends SpeakeasyBase {
    partitionInput: PartitionInput;
    partitionValueList: string[];
}
