import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidJobIdException
/** 
 * The JOBID was missing, not found, or not associated with the AWS account.
**/
export class InvalidJobIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
