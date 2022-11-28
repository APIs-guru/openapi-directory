import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
