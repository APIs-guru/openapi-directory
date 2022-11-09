import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Target
/** 
 * Information about the SNS topics associated with a notification rule.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;
}
