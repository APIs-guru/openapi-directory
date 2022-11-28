import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the persistent application settings for users of a stack.
**/
export declare class ApplicationSettingsResponse extends SpeakeasyBase {
    enabled?: boolean;
    s3BucketName?: string;
    settingsGroup?: string;
}
