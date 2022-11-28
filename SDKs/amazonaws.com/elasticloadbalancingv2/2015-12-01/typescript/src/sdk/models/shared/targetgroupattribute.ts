import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetGroupAttribute
/** 
 * Information about a target group attribute.
**/
export class TargetGroupAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
