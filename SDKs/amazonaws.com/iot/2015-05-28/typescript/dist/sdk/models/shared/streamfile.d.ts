import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Represents a file to stream.
**/
export declare class StreamFile extends SpeakeasyBase {
    fileId?: number;
    s3Location?: S3Location;
}
