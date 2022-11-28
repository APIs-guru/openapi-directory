import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionStateEnum } from "./stepexecutionstateenum";



// StepExecutionStatusDetail
/** 
 * The execution state of a step.
**/
export class StepExecutionStatusDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: StepExecutionStateEnum;
}
