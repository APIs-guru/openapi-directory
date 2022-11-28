import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// BatchUpdatePartitionFailureEntry
/** 
 * Contains information about a batch update partition error.
**/
export class BatchUpdatePartitionFailureEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=PartitionValueList" })
  partitionValueList?: string[];
}
