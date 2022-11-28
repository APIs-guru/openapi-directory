import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpiredJobIdException
/** 
 * Indicates that the specified job has expired out of the system.
**/
export class ExpiredJobIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
