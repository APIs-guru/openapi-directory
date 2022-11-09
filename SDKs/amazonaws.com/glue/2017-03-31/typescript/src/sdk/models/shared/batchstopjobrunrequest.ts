import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchStopJobRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=JobRunIds" })
  jobRunIds: string[];
}
