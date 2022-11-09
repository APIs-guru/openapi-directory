import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedDatastoreS3StorageSummary } from "./customermanageddatastores3storagesummary";
import { DatastoreIotSiteWiseMultiLayerStorageSummary } from "./datastoreiotsitewisemultilayerstoragesummary";
/**
 * Contains information about your data store.
**/
export declare class DatastoreStorageSummary extends SpeakeasyBase {
    customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
    iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;
    serviceManagedS3?: Map<string, any>;
}
