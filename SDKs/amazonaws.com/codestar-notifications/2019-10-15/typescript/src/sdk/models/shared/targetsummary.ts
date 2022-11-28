import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetStatusEnum } from "./targetstatusenum";



// TargetSummary
/** 
 * Information about the targets specified for a notification rule.
**/
export class TargetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetStatus" })
  targetStatus?: TargetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;
}
