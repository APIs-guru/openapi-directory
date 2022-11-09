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
var UpdateDatasetPathParams = /** @class */ (function (_super) {
    __extends(UpdateDatasetPathParams, _super);
    function UpdateDatasetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetName" }),
        __metadata("design:type", String)
    ], UpdateDatasetPathParams.prototype, "datasetName", void 0);
    return UpdateDatasetPathParams;
}(SpeakeasyBase));
export { UpdateDatasetPathParams };
var UpdateDatasetHeaders = /** @class */ (function (_super) {
    __extends(UpdateDatasetHeaders, _super);
    function UpdateDatasetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDatasetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDatasetHeaders;
}(SpeakeasyBase));
export { UpdateDatasetHeaders };
// UpdateDatasetRequestBodyRetentionPeriod
/**
 * How long, in days, message data is kept.
**/
var UpdateDatasetRequestBodyRetentionPeriod = /** @class */ (function (_super) {
    __extends(UpdateDatasetRequestBodyRetentionPeriod, _super);
    function UpdateDatasetRequestBodyRetentionPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=numberOfDays" }),
        __metadata("design:type", Number)
    ], UpdateDatasetRequestBodyRetentionPeriod.prototype, "numberOfDays", void 0);
    __decorate([
        Metadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], UpdateDatasetRequestBodyRetentionPeriod.prototype, "unlimited", void 0);
    return UpdateDatasetRequestBodyRetentionPeriod;
}(SpeakeasyBase));
export { UpdateDatasetRequestBodyRetentionPeriod };
// UpdateDatasetRequestBodyVersioningConfiguration
/**
 * Information about the versioning of dataset contents.
**/
var UpdateDatasetRequestBodyVersioningConfiguration = /** @class */ (function (_super) {
    __extends(UpdateDatasetRequestBodyVersioningConfiguration, _super);
    function UpdateDatasetRequestBodyVersioningConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxVersions" }),
        __metadata("design:type", Number)
    ], UpdateDatasetRequestBodyVersioningConfiguration.prototype, "maxVersions", void 0);
    __decorate([
        Metadata({ data: "json, name=unlimited" }),
        __metadata("design:type", Boolean)
    ], UpdateDatasetRequestBodyVersioningConfiguration.prototype, "unlimited", void 0);
    return UpdateDatasetRequestBodyVersioningConfiguration;
}(SpeakeasyBase));
export { UpdateDatasetRequestBodyVersioningConfiguration };
var UpdateDatasetRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatasetRequestBody, _super);
    function UpdateDatasetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actions", elemType: shared.DatasetAction }),
        __metadata("design:type", Array)
    ], UpdateDatasetRequestBody.prototype, "actions", void 0);
    __decorate([
        Metadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule }),
        __metadata("design:type", Array)
    ], UpdateDatasetRequestBody.prototype, "contentDeliveryRules", void 0);
    __decorate([
        Metadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule }),
        __metadata("design:type", Array)
    ], UpdateDatasetRequestBody.prototype, "lateDataRules", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", UpdateDatasetRequestBodyRetentionPeriod)
    ], UpdateDatasetRequestBody.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger }),
        __metadata("design:type", Array)
    ], UpdateDatasetRequestBody.prototype, "triggers", void 0);
    __decorate([
        Metadata({ data: "json, name=versioningConfiguration" }),
        __metadata("design:type", UpdateDatasetRequestBodyVersioningConfiguration)
    ], UpdateDatasetRequestBody.prototype, "versioningConfiguration", void 0);
    return UpdateDatasetRequestBody;
}(SpeakeasyBase));
export { UpdateDatasetRequestBody };
var UpdateDatasetRequest = /** @class */ (function (_super) {
    __extends(UpdateDatasetRequest, _super);
    function UpdateDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatasetPathParams)
    ], UpdateDatasetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatasetHeaders)
    ], UpdateDatasetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDatasetRequestBody)
    ], UpdateDatasetRequest.prototype, "request", void 0);
    return UpdateDatasetRequest;
}(SpeakeasyBase));
export { UpdateDatasetRequest };
var UpdateDatasetResponse = /** @class */ (function (_super) {
    __extends(UpdateDatasetResponse, _super);
    function UpdateDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatasetResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatasetResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatasetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatasetResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDatasetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDatasetResponse.prototype, "throttlingException", void 0);
    return UpdateDatasetResponse;
}(SpeakeasyBase));
export { UpdateDatasetResponse };
