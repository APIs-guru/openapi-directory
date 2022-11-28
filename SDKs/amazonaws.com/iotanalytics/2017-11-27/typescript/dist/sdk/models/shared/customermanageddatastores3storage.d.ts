import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
**/
export declare class CustomerManagedDatastoreS3Storage extends SpeakeasyBase {
    bucket: string;
    keyPrefix?: string;
    roleArn: string;
}
