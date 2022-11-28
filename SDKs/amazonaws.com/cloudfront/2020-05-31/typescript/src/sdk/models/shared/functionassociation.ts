import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";



// FunctionAssociation
/** 
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
**/
export class FunctionAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventType: EventTypeEnum;

  @SpeakeasyMetadata()
  functionArn: string;
}
