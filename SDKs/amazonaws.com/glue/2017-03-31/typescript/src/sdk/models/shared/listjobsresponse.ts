import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobNames" })
  jobNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
