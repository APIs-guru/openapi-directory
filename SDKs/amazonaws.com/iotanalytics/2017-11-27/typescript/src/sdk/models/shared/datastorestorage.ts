import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedDatastoreS3Storage } from "./customermanageddatastores3storage";
import { DatastoreIotSiteWiseMultiLayerStorage } from "./datastoreiotsitewisemultilayerstorage";


// DatastoreStorage
/** 
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class DatastoreStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedDatastoreS3Storage;

  @Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorage;

  @Metadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
