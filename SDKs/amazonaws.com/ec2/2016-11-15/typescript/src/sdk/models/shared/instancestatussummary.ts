import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusDetails } from "./instancestatusdetails";
import { SummaryStatusEnum } from "./summarystatusenum";



// InstanceStatusSummary
/** 
 * Describes the status of an instance.
**/
export class InstanceStatusSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceStatusDetails })
  details?: InstanceStatusDetails[];

  @SpeakeasyMetadata()
  status?: SummaryStatusEnum;
}
