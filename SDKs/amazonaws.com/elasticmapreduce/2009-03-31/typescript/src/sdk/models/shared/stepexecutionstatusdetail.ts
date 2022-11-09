import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepExecutionStateEnum } from "./stepexecutionstateenum";


// StepExecutionStatusDetail
/** 
 * The execution state of a step.
**/
export class StepExecutionStatusDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state: StepExecutionStateEnum;
}
