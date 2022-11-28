import { SpeakeasyBase } from "../../../internal/utils";
import { S3Destination } from "./s3destination";
/**
 * Describes the location of the updated firmware.
**/
export declare class Destination extends SpeakeasyBase {
    s3Destination?: S3Destination;
}
