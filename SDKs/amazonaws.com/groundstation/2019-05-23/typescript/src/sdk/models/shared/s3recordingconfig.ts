import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3RecordingConfig
/** 
 * Information about an S3 recording <code>Config</code>.
**/
export class S3RecordingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketArn" })
  bucketArn: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
