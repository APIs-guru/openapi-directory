import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionRuntimeEnum } from "./functionruntimeenum";



// FunctionConfig
/** 
 * Contains configuration information about a CloudFront function.
**/
export class FunctionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  runtime: FunctionRuntimeEnum;
}
