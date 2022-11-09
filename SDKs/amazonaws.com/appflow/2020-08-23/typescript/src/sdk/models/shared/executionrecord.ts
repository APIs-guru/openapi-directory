import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionResult } from "./executionresult";
import { ExecutionStatusEnum } from "./executionstatusenum";


// ExecutionRecord
/** 
 *  Specifies information about the past flow run instances for a given flow. 
**/
export class ExecutionRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataPullEndTime" })
  dataPullEndTime?: Date;

  @Metadata({ data: "json, name=dataPullStartTime" })
  dataPullStartTime?: Date;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=executionResult" })
  executionResult?: ExecutionResult;

  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: ExecutionStatusEnum;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;
}
