import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionResult } from "./executionresult";
import { ExecutionStatusEnum } from "./executionstatusenum";



// ExecutionRecord
/** 
 *  Specifies information about the past flow run instances for a given flow. 
**/
export class ExecutionRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataPullEndTime" })
  dataPullEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataPullStartTime" })
  dataPullStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=executionResult" })
  executionResult?: ExecutionResult;

  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus?: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;
}
