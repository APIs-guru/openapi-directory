import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailedBatchItem
/** 
 *  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
**/
export class FailedBatchItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
