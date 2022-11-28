import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobNames" })
  jobNames: string[];
}
