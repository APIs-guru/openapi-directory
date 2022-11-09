import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
**/
export declare class IotSiteWiseCustomerManagedDatastoreS3Storage extends SpeakeasyBase {
    bucket: string;
    keyPrefix?: string;
}
