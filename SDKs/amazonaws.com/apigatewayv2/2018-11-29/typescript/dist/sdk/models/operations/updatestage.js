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
var UpdateStagePathParams = /** @class */ (function (_super) {
    __extends(UpdateStagePathParams, _super);
    function UpdateStagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateStagePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stageName" }),
        __metadata("design:type", String)
    ], UpdateStagePathParams.prototype, "stageName", void 0);
    return UpdateStagePathParams;
}(SpeakeasyBase));
export { UpdateStagePathParams };
var UpdateStageHeaders = /** @class */ (function (_super) {
    __extends(UpdateStageHeaders, _super);
    function UpdateStageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateStageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateStageHeaders;
}(SpeakeasyBase));
export { UpdateStageHeaders };
// UpdateStageRequestBodyAccessLogSettings
/**
 * Settings for logging access in a stage.
**/
var UpdateStageRequestBodyAccessLogSettings = /** @class */ (function (_super) {
    __extends(UpdateStageRequestBodyAccessLogSettings, _super);
    function UpdateStageRequestBodyAccessLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationArn" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBodyAccessLogSettings.prototype, "destinationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBodyAccessLogSettings.prototype, "format", void 0);
    return UpdateStageRequestBodyAccessLogSettings;
}(SpeakeasyBase));
export { UpdateStageRequestBodyAccessLogSettings };
// UpdateStageRequestBodyDefaultRouteSettings
/**
 * Represents a collection of route settings.
**/
var UpdateStageRequestBodyDefaultRouteSettings = /** @class */ (function (_super) {
    __extends(UpdateStageRequestBodyDefaultRouteSettings, _super);
    function UpdateStageRequestBodyDefaultRouteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateStageRequestBodyDefaultRouteSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateStageRequestBodyDefaultRouteSettings.prototype, "detailedMetricsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBodyDefaultRouteSettings.prototype, "loggingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Number)
    ], UpdateStageRequestBodyDefaultRouteSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Number)
    ], UpdateStageRequestBodyDefaultRouteSettings.prototype, "throttlingRateLimit", void 0);
    return UpdateStageRequestBodyDefaultRouteSettings;
}(SpeakeasyBase));
export { UpdateStageRequestBodyDefaultRouteSettings };
var UpdateStageRequestBody = /** @class */ (function (_super) {
    __extends(UpdateStageRequestBody, _super);
    function UpdateStageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessLogSettings" }),
        __metadata("design:type", UpdateStageRequestBodyAccessLogSettings)
    ], UpdateStageRequestBody.prototype, "accessLogSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoDeploy" }),
        __metadata("design:type", Boolean)
    ], UpdateStageRequestBody.prototype, "autoDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientCertificateId" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBody.prototype, "clientCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultRouteSettings" }),
        __metadata("design:type", UpdateStageRequestBodyDefaultRouteSettings)
    ], UpdateStageRequestBody.prototype, "defaultRouteSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBody.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateStageRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeSettings", elemType: shared.RouteSettings }),
        __metadata("design:type", Map)
    ], UpdateStageRequestBody.prototype, "routeSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageVariables" }),
        __metadata("design:type", Map)
    ], UpdateStageRequestBody.prototype, "stageVariables", void 0);
    return UpdateStageRequestBody;
}(SpeakeasyBase));
export { UpdateStageRequestBody };
var UpdateStageRequest = /** @class */ (function (_super) {
    __extends(UpdateStageRequest, _super);
    function UpdateStageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStagePathParams)
    ], UpdateStageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStageHeaders)
    ], UpdateStageRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateStageRequestBody)
    ], UpdateStageRequest.prototype, "request", void 0);
    return UpdateStageRequest;
}(SpeakeasyBase));
export { UpdateStageRequest };
var UpdateStageResponse = /** @class */ (function (_super) {
    __extends(UpdateStageResponse, _super);
    function UpdateStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateStageResponse)
    ], UpdateStageResponse.prototype, "updateStageResponse", void 0);
    return UpdateStageResponse;
}(SpeakeasyBase));
export { UpdateStageResponse };
