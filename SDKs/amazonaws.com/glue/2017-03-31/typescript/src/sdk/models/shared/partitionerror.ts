import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// PartitionError
/** 
 * Contains information about a partition error.
**/
export class PartitionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @Metadata({ data: "json, name=PartitionValues" })
  partitionValues?: string[];
}
