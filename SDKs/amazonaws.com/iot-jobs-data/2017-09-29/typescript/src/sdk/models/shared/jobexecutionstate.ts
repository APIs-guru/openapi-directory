import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";



// JobExecutionState
/** 
 * Contains data about the state of a job execution.
**/
export class JobExecutionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
