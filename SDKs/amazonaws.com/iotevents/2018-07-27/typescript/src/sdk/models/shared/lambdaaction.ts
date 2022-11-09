import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";


// LambdaAction
/** 
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
**/
export class LambdaAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionArn" })
  functionArn: string;

  @Metadata({ data: "json, name=payload" })
  payload?: Payload;
}
