import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobNames" })
  jobNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
