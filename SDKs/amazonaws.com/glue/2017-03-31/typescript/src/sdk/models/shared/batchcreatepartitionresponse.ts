import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionError } from "./partitionerror";


export class BatchCreatePartitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.PartitionError })
  errors?: PartitionError[];
}
