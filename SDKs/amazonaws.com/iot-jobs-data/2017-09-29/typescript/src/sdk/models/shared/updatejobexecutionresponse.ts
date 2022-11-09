import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionState } from "./jobexecutionstate";


export class UpdateJobExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionState" })
  executionState?: JobExecutionState;

  @Metadata({ data: "json, name=jobDocument" })
  jobDocument?: string;
}
