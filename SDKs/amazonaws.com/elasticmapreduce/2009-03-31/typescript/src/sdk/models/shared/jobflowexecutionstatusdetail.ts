import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";


// JobFlowExecutionStatusDetail
/** 
 * Describes the status of the cluster (job flow).
**/
export class JobFlowExecutionStatusDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state: JobFlowExecutionStateEnum;
}
