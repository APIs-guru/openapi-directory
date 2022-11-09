import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetStatusEnum } from "./targetstatusenum";


// TargetSummary
/** 
 * Information about the targets specified for a notification rule.
**/
export class TargetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @Metadata({ data: "json, name=TargetStatus" })
  targetStatus?: TargetStatusEnum;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;
}
