import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecution } from "./jobexecution";



export class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=execution" })
  execution?: JobExecution;
}
