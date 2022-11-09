import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3RecordingDetails
/** 
 * Details about an S3 recording <code>Config</code> used in a contact.
**/
export class S3RecordingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @Metadata({ data: "json, name=keyTemplate" })
  keyTemplate?: string;
}
