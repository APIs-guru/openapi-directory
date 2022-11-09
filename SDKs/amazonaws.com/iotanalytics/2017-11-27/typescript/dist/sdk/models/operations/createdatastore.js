var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateDatastoreHeaders = /** @class */ (function (_super) {
    __extends(CreateDatastoreHeaders, _super);
    function CreateDatastoreHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDatastoreHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDatastoreHeaders;
}(SpeakeasyBase));
export { CreateDatastoreHeaders };
// CreateDatastoreRequestBodyDatastorePartitions
/**
 *  Contains information about the partition dimensions in a data store.
**/
var CreateDatastoreRequestBodyDatastorePartitions = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequestBodyDatastorePartitions, _super);
    function CreateDatastoreRequestBodyDatastorePartitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=partitions", elemType: shared.DatastorePartition }),
        __metadata("design:type", Array)
    ], CreateDatastoreRequestBodyDatastorePartitions.prototype, "partitions", void 0);
    return CreateDatastoreRequestBodyDatastorePartitions;
}(SpeakeasyBase));
export { CreateDatastoreRequestBodyDatastorePartitions };
// CreateDatastoreRequestBodyDatastoreStorage
/**
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
**/
var CreateDatastoreRequestBodyDatastoreStorage = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequestBodyDatastoreStorage, _super);
    function CreateDatastoreRequestBodyDatastoreStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerManagedS3" }),
        __metadata("design:type", shared.CustomerManagedDatastoreS3Storage)
    ], CreateDatastoreRequestBodyDatastoreStorage.prototype, "customerManagedS3", void 0);
    __decorate([
        Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" }),
        __metadata("design:type", shared.DatastoreIotSiteWiseMultiLayerStorage)
    ], CreateDatastoreRequestBodyDatastoreStorage.prototype, "iotSiteWiseMultiLayerStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceManagedS3" }),
        __metadata("design:type", Map)
    ], CreateDatastoreRequestBodyDatastoreStorage.prototype, "serviceManagedS3", void 0);
    return CreateDatastoreRequestBodyDatastoreStorage;
}(SpeakeasyBase));
export { CreateDatastoreRequestBodyDatastoreStorage };
// CreateDatastoreRequestBodyFileFormatConfiguration
/**
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
var CreateDatastoreRequestBodyFileFormatConfiguration = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequestBodyFileFormatConfiguration, _super);
    function CreateDatastoreRequestBodyFileFormatConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jsonConfiguration" }),
        __metadata("design:type", Map)
    ], CreateDatastoreRequestBodyFileFormatConfiguration.prototype, "jsonConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=parquetConfiguration" }),
        __metadata("design:type", shared.ParquetConfiguration)
    ], CreateDatastoreRequestBodyFileFormatConfiguration.prototype, "parquetConfiguration", void 0);
    return CreateDatastoreRequestBodyFileFormatConfiguration;
}(SpeakeasyBase));
export { CreateDatastoreRequestBodyFileFormatConfiguration };
// CreateDatastoreRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var CreateDatastoreRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequestBodyRetentionPeriod, _super);
    function CreateDatastoreRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], CreateDatastoreRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        Metadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], CreateDatastoreRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return CreateDatastoreRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { CreateDatastoreRequestBodyRetentionPeriod };
var CreateDatastoreRequestBody = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequestBody, _super);
    function CreateDatastoreRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=datastoreName" }),
        __metadata("design:type", String)
    ], CreateDatastoreRequestBody.prototype, "datastoreName", void 0);
    __decorate([
        Metadata({ data: "json, name=datastorePartitions" }),
        __metadata("design:type", CreateDatastoreRequestBodyDatastorePartitions)
    ], CreateDatastoreRequestBody.prototype, "datastorePartitions", void 0);
    __decorate([
        Metadata({ data: "json, name=datastoreStorage" }),
        __metadata("design:type", CreateDatastoreRequestBodyDatastoreStorage)
    ], CreateDatastoreRequestBody.prototype, "datastoreStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=fileFormatConfiguration" }),
        __metadata("design:type", CreateDatastoreRequestBodyFileFormatConfiguration)
    ], CreateDatastoreRequestBody.prototype, "fileFormatConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", CreateDatastoreRequestBodyRetentionPeriod)
    ], CreateDatastoreRequestBody.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDatastoreRequestBody.prototype, "tags", void 0);
    return CreateDatastoreRequestBody;
}(SpeakeasyBase));
export { CreateDatastoreRequestBody };
var CreateDatastoreRequest = /** @class */ (function (_super) {
    __extends(CreateDatastoreRequest, _super);
    function CreateDatastoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDatastoreHeaders)
    ], CreateDatastoreRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDatastoreRequestBody)
    ], CreateDatastoreRequest.prototype, "request", void 0);
    return CreateDatastoreRequest;
}(SpeakeasyBase));
export { CreateDatastoreRequest };
var CreateDatastoreResponse = /** @class */ (function (_super) {
    __extends(CreateDatastoreResponse, _super);
    function CreateDatastoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDatastoreResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateDatastoreResponse)
    ], CreateDatastoreResponse.prototype, "createDatastoreResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDatastoreResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDatastoreResponse.prototype, "throttlingException", void 0);
    return CreateDatastoreResponse;
}(SpeakeasyBase));
export { CreateDatastoreResponse };
