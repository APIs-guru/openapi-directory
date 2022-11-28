import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetryBuildBatchTypeEnum } from "./retrybuildbatchtypeenum";



export class RetryBuildBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=retryType" })
  retryType?: RetryBuildBatchTypeEnum;
}
