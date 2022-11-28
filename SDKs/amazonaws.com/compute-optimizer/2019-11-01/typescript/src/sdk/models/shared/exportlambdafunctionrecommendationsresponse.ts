import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Destination } from "./s3destination";



export class ExportLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Destination" })
  s3Destination?: S3Destination;
}
