import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyLambdaFunctionAssociations
/** 
 * Your request contains more Lambda function associations than are allowed per distribution.
**/
export class TooManyLambdaFunctionAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
