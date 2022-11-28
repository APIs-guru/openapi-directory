import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class GetJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
