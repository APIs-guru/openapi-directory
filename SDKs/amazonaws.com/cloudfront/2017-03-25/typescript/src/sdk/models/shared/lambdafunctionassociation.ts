import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";



// LambdaFunctionAssociation
/** 
 * A complex type that contains a Lambda function association.
**/
export class LambdaFunctionAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventType?: EventTypeEnum;

  @SpeakeasyMetadata()
  lambdaFunctionArn?: string;
}
