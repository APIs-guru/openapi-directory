import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// PartitionError
/** 
 * Contains information about a partition error.
**/
export class PartitionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=PartitionValues" })
  partitionValues?: string[];
}
