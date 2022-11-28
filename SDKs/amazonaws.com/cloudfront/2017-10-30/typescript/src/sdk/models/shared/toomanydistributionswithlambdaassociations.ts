import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyDistributionsWithLambdaAssociations
/** 
 * Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.
**/
export class TooManyDistributionsWithLambdaAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
