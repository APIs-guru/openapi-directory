import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";



// ExecutionDetails
/** 
 *  Describes the details of the flow run, including the timestamp, status, and message. 
**/
export class ExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mostRecentExecutionMessage" })
  mostRecentExecutionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=mostRecentExecutionStatus" })
  mostRecentExecutionStatus?: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=mostRecentExecutionTime" })
  mostRecentExecutionTime?: Date;
}
