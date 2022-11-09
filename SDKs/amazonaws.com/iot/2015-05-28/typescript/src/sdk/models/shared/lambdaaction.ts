import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaAction
/** 
 * Describes an action to invoke a Lambda function.
**/
export class LambdaAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionArn" })
  functionArn: string;
}
