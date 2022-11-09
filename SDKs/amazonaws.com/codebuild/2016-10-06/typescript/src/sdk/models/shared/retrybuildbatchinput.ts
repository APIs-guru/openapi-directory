import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetryBuildBatchTypeEnum } from "./retrybuildbatchtypeenum";


export class RetryBuildBatchInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=retryType" })
  retryType?: RetryBuildBatchTypeEnum;
}
