import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3SourceProperties
/** 
 * The properties that are applied when Amazon S3 is being used as the flow source.
**/
export class S3SourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=BucketPrefix" })
  bucketPrefix?: string;
}
