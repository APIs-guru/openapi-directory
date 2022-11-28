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
var StartJobRunPathParams = /** @class */ (function (_super) {
    __extends(StartJobRunPathParams, _super);
    function StartJobRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" }),
        __metadata("design:type", String)
    ], StartJobRunPathParams.prototype, "virtualClusterId", void 0);
    return StartJobRunPathParams;
}(SpeakeasyBase));
export { StartJobRunPathParams };
var StartJobRunHeaders = /** @class */ (function (_super) {
    __extends(StartJobRunHeaders, _super);
    function StartJobRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartJobRunHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartJobRunHeaders;
}(SpeakeasyBase));
export { StartJobRunHeaders };
// StartJobRunRequestBodyConfigurationOverrides
/**
 * A configuration specification to be used to override existing configurations.
**/
var StartJobRunRequestBodyConfigurationOverrides = /** @class */ (function (_super) {
    __extends(StartJobRunRequestBodyConfigurationOverrides, _super);
    function StartJobRunRequestBodyConfigurationOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration }),
        __metadata("design:type", Array)
    ], StartJobRunRequestBodyConfigurationOverrides.prototype, "applicationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringConfiguration" }),
        __metadata("design:type", shared.MonitoringConfiguration)
    ], StartJobRunRequestBodyConfigurationOverrides.prototype, "monitoringConfiguration", void 0);
    return StartJobRunRequestBodyConfigurationOverrides;
}(SpeakeasyBase));
export { StartJobRunRequestBodyConfigurationOverrides };
// StartJobRunRequestBodyJobDriver
/**
 * Specify the driver that the job runs on.
**/
var StartJobRunRequestBodyJobDriver = /** @class */ (function (_super) {
    __extends(StartJobRunRequestBodyJobDriver, _super);
    function StartJobRunRequestBodyJobDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSubmitJobDriver" }),
        __metadata("design:type", shared.SparkSubmitJobDriver)
    ], StartJobRunRequestBodyJobDriver.prototype, "sparkSubmitJobDriver", void 0);
    return StartJobRunRequestBodyJobDriver;
}(SpeakeasyBase));
export { StartJobRunRequestBodyJobDriver };
var StartJobRunRequestBody = /** @class */ (function (_super) {
    __extends(StartJobRunRequestBody, _super);
    function StartJobRunRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], StartJobRunRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationOverrides" }),
        __metadata("design:type", StartJobRunRequestBodyConfigurationOverrides)
    ], StartJobRunRequestBody.prototype, "configurationOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], StartJobRunRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobDriver" }),
        __metadata("design:type", StartJobRunRequestBodyJobDriver)
    ], StartJobRunRequestBody.prototype, "jobDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StartJobRunRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseLabel" }),
        __metadata("design:type", String)
    ], StartJobRunRequestBody.prototype, "releaseLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StartJobRunRequestBody.prototype, "tags", void 0);
    return StartJobRunRequestBody;
}(SpeakeasyBase));
export { StartJobRunRequestBody };
var StartJobRunRequest = /** @class */ (function (_super) {
    __extends(StartJobRunRequest, _super);
    function StartJobRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartJobRunPathParams)
    ], StartJobRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartJobRunHeaders)
    ], StartJobRunRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartJobRunRequestBody)
    ], StartJobRunRequest.prototype, "request", void 0);
    return StartJobRunRequest;
}(SpeakeasyBase));
export { StartJobRunRequest };
var StartJobRunResponse = /** @class */ (function (_super) {
    __extends(StartJobRunResponse, _super);
    function StartJobRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartJobRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobRunResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobRunResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartJobRunResponse)
    ], StartJobRunResponse.prototype, "startJobRunResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartJobRunResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobRunResponse.prototype, "validationException", void 0);
    return StartJobRunResponse;
}(SpeakeasyBase));
export { StartJobRunResponse };
