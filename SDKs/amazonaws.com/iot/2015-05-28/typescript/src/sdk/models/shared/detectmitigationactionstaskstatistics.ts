import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectMitigationActionsTaskStatistics
/** 
 *  The statistics of a mitigation action task. 
**/
export class DetectMitigationActionsTaskStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionsExecuted" })
  actionsExecuted?: number;

  @Metadata({ data: "json, name=actionsFailed" })
  actionsFailed?: number;

  @Metadata({ data: "json, name=actionsSkipped" })
  actionsSkipped?: number;
}
