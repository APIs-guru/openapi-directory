import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaAction
/** 
 * Describes an action to invoke a Lambda function.
**/
export class LambdaAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionArn" })
  functionArn: string;
}
