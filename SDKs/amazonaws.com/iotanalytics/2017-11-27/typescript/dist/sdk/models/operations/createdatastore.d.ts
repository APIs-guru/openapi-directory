import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Contains information about the partition dimensions in a data store.
**/
export declare class CreateDatastoreRequestBodyDatastorePartitions extends SpeakeasyBase {
    partitions?: shared.DatastorePartition[];
}
/**
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
**/
export declare class CreateDatastoreRequestBodyDatastoreStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedDatastoreS3Storage;
    iotSiteWiseMultiLayerStorage?: shared.DatastoreIotSiteWiseMultiLayerStorage;
    serviceManagedS3?: Map<string, any>;
}
/**
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
export declare class CreateDatastoreRequestBodyFileFormatConfiguration extends SpeakeasyBase {
    jsonConfiguration?: Map<string, any>;
    parquetConfiguration?: shared.ParquetConfiguration;
}
/**
 * How long, in days, message data is kept.
**/
export declare class CreateDatastoreRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class CreateDatastoreRequestBody extends SpeakeasyBase {
    datastoreName: string;
    datastorePartitions?: CreateDatastoreRequestBodyDatastorePartitions;
    datastoreStorage?: CreateDatastoreRequestBodyDatastoreStorage;
    fileFormatConfiguration?: CreateDatastoreRequestBodyFileFormatConfiguration;
    retentionPeriod?: CreateDatastoreRequestBodyRetentionPeriod;
    tags?: shared.Tag[];
}
export declare class CreateDatastoreRequest extends SpeakeasyBase {
    headers: CreateDatastoreHeaders;
    request: CreateDatastoreRequestBody;
}
export declare class CreateDatastoreResponse extends SpeakeasyBase {
    contentType: string;
    createDatastoreResponse?: shared.CreateDatastoreResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
