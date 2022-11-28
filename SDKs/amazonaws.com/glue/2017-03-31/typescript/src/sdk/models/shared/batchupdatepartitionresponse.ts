import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchUpdatePartitionFailureEntry } from "./batchupdatepartitionfailureentry";



export class BatchUpdatePartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchUpdatePartitionFailureEntry })
  errors?: BatchUpdatePartitionFailureEntry[];
}
