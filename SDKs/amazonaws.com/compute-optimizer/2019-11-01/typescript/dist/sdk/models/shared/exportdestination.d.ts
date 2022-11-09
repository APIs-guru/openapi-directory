import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";
/**
 * Describes the destination of the recommendations export and metadata files.
**/
export declare class ExportDestination extends SpeakeasyBase {
    s3?: S3Destination;
}
