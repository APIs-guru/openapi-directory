import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=PredecessorsIncluded" })
  predecessorsIncluded?: boolean;

  @Metadata({ data: "json, name=RunId" })
  runId: string;
}
