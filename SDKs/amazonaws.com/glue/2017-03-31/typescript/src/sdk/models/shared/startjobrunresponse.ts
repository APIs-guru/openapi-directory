import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
