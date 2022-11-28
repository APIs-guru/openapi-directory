import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=PredecessorsIncluded" })
  predecessorsIncluded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId: string;
}
