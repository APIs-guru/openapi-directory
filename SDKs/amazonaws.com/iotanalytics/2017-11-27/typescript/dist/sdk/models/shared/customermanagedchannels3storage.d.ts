import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.
**/
export declare class CustomerManagedChannelS3Storage extends SpeakeasyBase {
    bucket: string;
    keyPrefix?: string;
    roleArn: string;
}
