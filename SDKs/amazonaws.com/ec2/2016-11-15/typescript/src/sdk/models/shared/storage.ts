import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Storage } from "./s3storage";



// Storage
/** 
 * Describes the storage location for an instance store-backed AMI.
**/
export class Storage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3?: S3Storage;
}
