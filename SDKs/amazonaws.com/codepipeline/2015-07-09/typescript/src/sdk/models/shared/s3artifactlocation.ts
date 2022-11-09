import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ArtifactLocation
/** 
 * The location of the S3 bucket that contains a revision.
**/
export class S3ArtifactLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=objectKey" })
  objectKey: string;
}
