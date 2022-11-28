import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetGroupStickinessConfig
/** 
 * Information about the target group stickiness for a rule.
**/
export class TargetGroupStickinessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  durationSeconds?: number;

  @SpeakeasyMetadata()
  enabled?: boolean;
}
