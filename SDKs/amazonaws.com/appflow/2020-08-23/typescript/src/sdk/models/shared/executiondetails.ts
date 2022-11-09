import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";


// ExecutionDetails
/** 
 *  Describes the details of the flow run, including the timestamp, status, and message. 
**/
export class ExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=mostRecentExecutionMessage" })
  mostRecentExecutionMessage?: string;

  @Metadata({ data: "json, name=mostRecentExecutionStatus" })
  mostRecentExecutionStatus?: ExecutionStatusEnum;

  @Metadata({ data: "json, name=mostRecentExecutionTime" })
  mostRecentExecutionTime?: Date;
}
