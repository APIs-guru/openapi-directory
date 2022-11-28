import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnableToCancelJobIdException
/** 
 * AWS Import/Export cannot cancel the job
**/
export class UnableToCancelJobIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
