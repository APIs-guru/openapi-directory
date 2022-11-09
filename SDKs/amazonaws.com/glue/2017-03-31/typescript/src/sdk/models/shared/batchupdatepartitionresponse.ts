import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchUpdatePartitionFailureEntry } from "./batchupdatepartitionfailureentry";


export class BatchUpdatePartitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchUpdatePartitionFailureEntry })
  errors?: BatchUpdatePartitionFailureEntry[];
}
