import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailedBatchItem
/** 
 *  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
**/
export class FailedBatchItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage: string;

  @Metadata({ data: "json, name=id" })
  id: string;
}
