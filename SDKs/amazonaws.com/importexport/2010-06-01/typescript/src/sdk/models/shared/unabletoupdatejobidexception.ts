import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnableToUpdateJobIdException
/** 
 * AWS Import/Export cannot update the job
**/
export class UnableToUpdateJobIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
