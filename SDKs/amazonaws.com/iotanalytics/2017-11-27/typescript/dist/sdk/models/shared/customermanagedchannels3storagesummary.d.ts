import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Used to store channel data in an S3 bucket that you manage.
**/
export declare class CustomerManagedChannelS3StorageSummary extends SpeakeasyBase {
    bucket?: string;
    keyPrefix?: string;
    roleArn?: string;
}
