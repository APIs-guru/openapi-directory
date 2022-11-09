import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
