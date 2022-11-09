import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobBookmarkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
