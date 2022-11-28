import { SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";
/**
 * Describes the storage location for an instance store-backed AMI.
**/
export declare class Storage extends SpeakeasyBase {
    s3?: S3Storage;
}
