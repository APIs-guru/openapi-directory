import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


export class GetJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
