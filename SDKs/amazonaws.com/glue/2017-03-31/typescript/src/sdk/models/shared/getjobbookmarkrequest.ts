import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobBookmarkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
