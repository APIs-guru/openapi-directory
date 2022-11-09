import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";


export class ExportAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=s3Destination" })
  s3Destination?: S3Destination;
}
