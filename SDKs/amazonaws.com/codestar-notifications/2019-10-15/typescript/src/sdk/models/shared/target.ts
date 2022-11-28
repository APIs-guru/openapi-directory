import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Target
/** 
 * Information about the SNS topics associated with a notification rule.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;
}
