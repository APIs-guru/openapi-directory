import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatastorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datastoreName" })
  datastoreName: string;
}


export class UpdateDatastoreHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateDatastoreRequestBodyDatastoreStorage
/** 
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class UpdateDatastoreRequestBodyDatastoreStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: shared.CustomerManagedDatastoreS3Storage;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: shared.DatastoreIotSiteWiseMultiLayerStorage;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}


// UpdateDatastoreRequestBodyFileFormatConfiguration
/** 
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
export class UpdateDatastoreRequestBodyFileFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jsonConfiguration" })
  jsonConfiguration?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parquetConfiguration" })
  parquetConfiguration?: shared.ParquetConfiguration;
}


// UpdateDatastoreRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class UpdateDatastoreRequestBodyRetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class UpdateDatastoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastoreStorage" })
  datastoreStorage?: UpdateDatastoreRequestBodyDatastoreStorage;

  @SpeakeasyMetadata({ data: "json, name=fileFormatConfiguration" })
  fileFormatConfiguration?: UpdateDatastoreRequestBodyFileFormatConfiguration;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: UpdateDatastoreRequestBodyRetentionPeriod;
}


export class UpdateDatastoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatastorePathParams;

  @SpeakeasyMetadata()
  headers: UpdateDatastoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDatastoreRequestBody;
}


export class UpdateDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
