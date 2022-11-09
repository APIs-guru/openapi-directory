import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationSettingsResponse
/** 
 * Describes the persistent application settings for users of a stack.
**/
export class ApplicationSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=SettingsGroup" })
  settingsGroup?: string;
}
