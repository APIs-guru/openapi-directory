import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectMitigationActionsTaskStatistics
/** 
 *  The statistics of a mitigation action task. 
**/
export class DetectMitigationActionsTaskStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionsExecuted" })
  actionsExecuted?: number;

  @SpeakeasyMetadata({ data: "json, name=actionsFailed" })
  actionsFailed?: number;

  @SpeakeasyMetadata({ data: "json, name=actionsSkipped" })
  actionsSkipped?: number;
}
