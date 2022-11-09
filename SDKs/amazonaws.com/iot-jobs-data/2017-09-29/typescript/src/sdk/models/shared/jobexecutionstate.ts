import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";


// JobExecutionState
/** 
 * Contains data about the state of a job execution.
**/
export class JobExecutionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
