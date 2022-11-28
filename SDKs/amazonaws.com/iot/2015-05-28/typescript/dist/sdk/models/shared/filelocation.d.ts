import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { Stream } from "./stream";
/**
 * The location of the OTA update.
**/
export declare class FileLocation extends SpeakeasyBase {
    s3Location?: S3Location;
    stream?: Stream;
}
