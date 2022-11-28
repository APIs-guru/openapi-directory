import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationSettingsResponse
/** 
 * Describes the persistent application settings for users of a stack.
**/
export class ApplicationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=SettingsGroup" })
  settingsGroup?: string;
}
