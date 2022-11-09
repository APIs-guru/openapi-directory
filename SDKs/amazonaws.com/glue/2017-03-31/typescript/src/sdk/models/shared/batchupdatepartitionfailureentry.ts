import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// BatchUpdatePartitionFailureEntry
/** 
 * Contains information about a batch update partition error.
**/
export class BatchUpdatePartitionFailureEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @Metadata({ data: "json, name=PartitionValueList" })
  partitionValueList?: string[];
}
