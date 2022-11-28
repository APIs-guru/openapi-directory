import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateJobQuotaExceededException
/** 
 * Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.
**/
export class CreateJobQuotaExceededException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
