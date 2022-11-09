import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
