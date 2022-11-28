import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionState } from "./jobexecutionstate";



export class UpdateJobExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionState" })
  executionState?: JobExecutionState;

  @SpeakeasyMetadata({ data: "json, name=jobDocument" })
  jobDocument?: string;
}
