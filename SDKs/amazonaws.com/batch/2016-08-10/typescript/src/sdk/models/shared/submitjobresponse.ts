import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;
}
