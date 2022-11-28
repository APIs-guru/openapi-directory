import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3RecordingConfig
/** 
 * Information about an S3 recording <code>Config</code>.
**/
export class S3RecordingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
