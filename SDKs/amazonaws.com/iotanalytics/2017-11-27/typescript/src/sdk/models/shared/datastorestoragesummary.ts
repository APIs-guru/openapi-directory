import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedDatastoreS3StorageSummary } from "./customermanageddatastores3storagesummary";
import { DatastoreIotSiteWiseMultiLayerStorageSummary } from "./datastoreiotsitewisemultilayerstoragesummary";


// DatastoreStorageSummary
/** 
 * Contains information about your data store.
**/
export class DatastoreStorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

  @Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;

  @Metadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
