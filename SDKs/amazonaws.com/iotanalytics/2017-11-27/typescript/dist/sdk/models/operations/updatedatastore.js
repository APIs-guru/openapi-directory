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
var UpdateDatastorePathParams = /** @class */ (function (_super) {
    __extends(UpdateDatastorePathParams, _super);
    function UpdateDatastorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datastoreName" }),
        __metadata("design:type", String)
    ], UpdateDatastorePathParams.prototype, "datastoreName", void 0);
    return UpdateDatastorePathParams;
}(SpeakeasyBase));
export { UpdateDatastorePathParams };
var UpdateDatastoreHeaders = /** @class */ (function (_super) {
    __extends(UpdateDatastoreHeaders, _super);
    function UpdateDatastoreHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDatastoreHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDatastoreHeaders;
}(SpeakeasyBase));
export { UpdateDatastoreHeaders };
// UpdateDatastoreRequestBodyDatastoreStorage
/**
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
**/
var UpdateDatastoreRequestBodyDatastoreStorage = /** @class */ (function (_super) {
    __extends(UpdateDatastoreRequestBodyDatastoreStorage, _super);
    function UpdateDatastoreRequestBodyDatastoreStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerManagedS3" }),
        __metadata("design:type", shared.CustomerManagedDatastoreS3Storage)
    ], UpdateDatastoreRequestBodyDatastoreStorage.prototype, "customerManagedS3", void 0);
    __decorate([
        Metadata({ data: "json, name=iotSiteWiseMultiLayerStorage" }),
        __metadata("design:type", shared.DatastoreIotSiteWiseMultiLayerStorage)
    ], UpdateDatastoreRequestBodyDatastoreStorage.prototype, "iotSiteWiseMultiLayerStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceManagedS3" }),
        __metadata("design:type", Map)
    ], UpdateDatastoreRequestBodyDatastoreStorage.prototype, "serviceManagedS3", void 0);
    return UpdateDatastoreRequestBodyDatastoreStorage;
}(SpeakeasyBase));
export { UpdateDatastoreRequestBodyDatastoreStorage };
// UpdateDatastoreRequestBodyFileFormatConfiguration
/**
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
var UpdateDatastoreRequestBodyFileFormatConfiguration = /** @class */ (function (_super) {
    __extends(UpdateDatastoreRequestBodyFileFormatConfiguration, _super);
    function UpdateDatastoreRequestBodyFileFormatConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jsonConfiguration" }),
        __metadata("design:type", Map)
    ], UpdateDatastoreRequestBodyFileFormatConfiguration.prototype, "jsonConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=parquetConfiguration" }),
        __metadata("design:type", shared.ParquetConfiguration)
    ], UpdateDatastoreRequestBodyFileFormatConfiguration.prototype, "parquetConfiguration", void 0);
    return UpdateDatastoreRequestBodyFileFormatConfiguration;
}(SpeakeasyBase));
export { UpdateDatastoreRequestBodyFileFormatConfiguration };
// UpdateDatastoreRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var UpdateDatastoreRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(UpdateDatastoreRequestBodyRetentionPeriod, _super);
    function UpdateDatastoreRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], UpdateDatastoreRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        Metadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], UpdateDatastoreRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return UpdateDatastoreRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { UpdateDatastoreRequestBodyRetentionPeriod };
var UpdateDatastoreRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatastoreRequestBody, _super);
    function UpdateDatastoreRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=datastoreStorage" }),
        __metadata("design:type", UpdateDatastoreRequestBodyDatastoreStorage)
    ], UpdateDatastoreRequestBody.prototype, "datastoreStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=fileFormatConfiguration" }),
        __metadata("design:type", UpdateDatastoreRequestBodyFileFormatConfiguration)
    ], UpdateDatastoreRequestBody.prototype, "fileFormatConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", UpdateDatastoreRequestBodyRetentionPeriod)
    ], UpdateDatastoreRequestBody.prototype, "retentionPeriod", void 0);
    return UpdateDatastoreRequestBody;
}(SpeakeasyBase));
export { UpdateDatastoreRequestBody };
var UpdateDatastoreRequest = /** @class */ (function (_super) {
    __extends(UpdateDatastoreRequest, _super);
    function UpdateDatastoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatastorePathParams)
    ], UpdateDatastoreRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatastoreHeaders)
    ], UpdateDatastoreRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDatastoreRequestBody)
    ], UpdateDatastoreRequest.prototype, "request", void 0);
    return UpdateDatastoreRequest;
}(SpeakeasyBase));
export { UpdateDatastoreRequest };
var UpdateDatastoreResponse = /** @class */ (function (_super) {
    __extends(UpdateDatastoreResponse, _super);
    function UpdateDatastoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDatastoreResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatastoreResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatastoreResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatastoreResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatastoreResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDatastoreResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatastoreResponse.prototype, "throttlingException", void 0);
    return UpdateDatastoreResponse;
}(SpeakeasyBase));
export { UpdateDatastoreResponse };
