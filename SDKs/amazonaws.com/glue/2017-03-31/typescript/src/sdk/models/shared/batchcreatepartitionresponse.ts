import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionError } from "./partitionerror";



export class BatchCreatePartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: PartitionError })
  errors?: PartitionError[];
}
