import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";
export declare class ExportEbsVolumeRecommendationsResponse extends SpeakeasyBase {
    jobId?: string;
    s3Destination?: S3Destination;
}
