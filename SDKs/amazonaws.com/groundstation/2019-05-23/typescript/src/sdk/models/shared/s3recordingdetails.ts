import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3RecordingDetails
/** 
 * Details about an S3 recording <code>Config</code> used in a contact.
**/
export class S3RecordingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=keyTemplate" })
  keyTemplate?: string;
}
