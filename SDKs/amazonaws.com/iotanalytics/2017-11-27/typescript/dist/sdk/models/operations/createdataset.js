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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var CreateDatasetHeaders = /** @class */ (function (_super) {
    __extends(CreateDatasetHeaders, _super);
    function CreateDatasetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDatasetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDatasetHeaders;
}(SpeakeasyBase));
export { CreateDatasetHeaders };
// CreateDatasetRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var CreateDatasetRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(CreateDatasetRequestBodyRetentionPeriod, _super);
    function CreateDatasetRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], CreateDatasetRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], CreateDatasetRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return CreateDatasetRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { CreateDatasetRequestBodyRetentionPeriod };
// CreateDatasetRequestBodyVersioningConfiguration
/**
 * Information about the versioning of dataset contents.
**/
var CreateDatasetRequestBodyVersioningConfiguration = /** @class */ (function (_super) {
    __extends(CreateDatasetRequestBodyVersioningConfiguration, _super);
    function CreateDatasetRequestBodyVersioningConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxVersions" }),
        __metadata("design:type", Number)
    ], CreateDatasetRequestBodyVersioningConfiguration.prototype, "maxVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], CreateDatasetRequestBodyVersioningConfiguration.prototype, "unlimited", void 0);
    return CreateDatasetRequestBodyVersioningConfiguration;
}(SpeakeasyBase));
export { CreateDatasetRequestBodyVersioningConfiguration };
var CreateDatasetRequestBody = /** @class */ (function (_super) {
    __extends(CreateDatasetRequestBody, _super);
    function CreateDatasetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.DatasetAction }),
        __metadata("design:type", Array)
    ], CreateDatasetRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule }),
        __metadata("design:type", Array)
    ], CreateDatasetRequestBody.prototype, "contentDeliveryRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasetName" }),
        __metadata("design:type", String)
    ], CreateDatasetRequestBody.prototype, "datasetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule }),
        __metadata("design:type", Array)
    ], CreateDatasetRequestBody.prototype, "lateDataRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", CreateDatasetRequestBodyRetentionPeriod)
    ], CreateDatasetRequestBody.prototype, "retentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDatasetRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger }),
        __metadata("design:type", Array)
    ], CreateDatasetRequestBody.prototype, "triggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versioningConfiguration" }),
        __metadata("design:type", CreateDatasetRequestBodyVersioningConfiguration)
    ], CreateDatasetRequestBody.prototype, "versioningConfiguration", void 0);
    return CreateDatasetRequestBody;
}(SpeakeasyBase));
export { CreateDatasetRequestBody };
var CreateDatasetRequest = /** @class */ (function (_super) {
    __extends(CreateDatasetRequest, _super);
    function CreateDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDatasetHeaders)
    ], CreateDatasetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDatasetRequestBody)
    ], CreateDatasetRequest.prototype, "request", void 0);
    return CreateDatasetRequest;
}(SpeakeasyBase));
export { CreateDatasetRequest };
var CreateDatasetResponse = /** @class */ (function (_super) {
    __extends(CreateDatasetResponse, _super);
    function CreateDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDatasetResponse)
    ], CreateDatasetResponse.prototype, "createDatasetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDatasetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDatasetResponse.prototype, "throttlingException", void 0);
    return CreateDatasetResponse;
}(SpeakeasyBase));
export { CreateDatasetResponse };
