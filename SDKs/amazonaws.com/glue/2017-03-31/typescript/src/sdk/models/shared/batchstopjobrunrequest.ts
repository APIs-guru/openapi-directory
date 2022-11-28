import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchStopJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunIds" })
  jobRunIds: string[];
}
