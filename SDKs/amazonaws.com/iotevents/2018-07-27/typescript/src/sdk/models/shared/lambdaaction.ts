import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// LambdaAction
/** 
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
**/
export class LambdaAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionArn" })
  functionArn: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;
}
