import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDatastoreHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateDatastoreRequestBodyDatastorePartitions
/** 
 *  Contains information about the partition dimensions in a data store. 
**/
export class CreateDatastoreRequestBodyDatastorePartitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitions", elemType: shared.DatastorePartition })
  partitions?: shared.DatastorePartition[];
}


// CreateDatastoreRequestBodyDatastoreStorage
/** 
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class CreateDatastoreRequestBodyDatastoreStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: shared.CustomerManagedDatastoreS3Storage;

  @Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: shared.DatastoreIotSiteWiseMultiLayerStorage;

  @Metadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}


// CreateDatastoreRequestBodyFileFormatConfiguration
/** 
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
export class CreateDatastoreRequestBodyFileFormatConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=jsonConfiguration" })
  jsonConfiguration?: Map<string, any>;

  @Metadata({ data: "json, name=parquetConfiguration" })
  parquetConfiguration?: shared.ParquetConfiguration;
}


// CreateDatastoreRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class CreateDatastoreRequestBodyRetentionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class CreateDatastoreRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastoreName" })
  datastoreName: string;

  @Metadata({ data: "json, name=datastorePartitions" })
  datastorePartitions?: CreateDatastoreRequestBodyDatastorePartitions;

  @Metadata({ data: "json, name=datastoreStorage" })
  datastoreStorage?: CreateDatastoreRequestBodyDatastoreStorage;

  @Metadata({ data: "json, name=fileFormatConfiguration" })
  fileFormatConfiguration?: CreateDatastoreRequestBodyFileFormatConfiguration;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: CreateDatastoreRequestBodyRetentionPeriod;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateDatastoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDatastoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDatastoreRequestBody;
}


export class CreateDatastoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDatastoreResponse?: shared.CreateDatastoreResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
