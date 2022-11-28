import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobFlowExecutionStateEnum } from "./jobflowexecutionstateenum";



// JobFlowExecutionStatusDetail
/** 
 * Describes the status of the cluster (job flow).
**/
export class JobFlowExecutionStatusDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: JobFlowExecutionStateEnum;
}
