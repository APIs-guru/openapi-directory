import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobNames" })
  jobNames: string[];
}
