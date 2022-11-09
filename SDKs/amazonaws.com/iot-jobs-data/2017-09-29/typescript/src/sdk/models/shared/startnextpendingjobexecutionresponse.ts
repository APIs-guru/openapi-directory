import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecution } from "./jobexecution";


export class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=execution" })
  execution?: JobExecution;
}
