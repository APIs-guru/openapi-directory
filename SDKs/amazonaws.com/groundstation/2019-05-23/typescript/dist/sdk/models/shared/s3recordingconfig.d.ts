import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about an S3 recording <code>Config</code>.
**/
export declare class S3RecordingConfig extends SpeakeasyBase {
    bucketArn: string;
    prefix?: string;
    roleArn: string;
}
