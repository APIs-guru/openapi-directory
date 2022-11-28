import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ArtifactLocation
/** 
 * The location of the S3 bucket that contains a revision.
**/
export class S3ArtifactLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=objectKey" })
  objectKey: string;
}
