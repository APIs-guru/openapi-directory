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
var UpdateThingRuntimeConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationPathParams, _super);
    function UpdateThingRuntimeConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThingName" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationPathParams.prototype, "thingName", void 0);
    return UpdateThingRuntimeConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationPathParams };
var UpdateThingRuntimeConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationHeaders, _super);
    function UpdateThingRuntimeConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateThingRuntimeConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationHeaders };
// UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
/**
 * Configuration settings for running telemetry.
**/
var UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration, _super);
    function UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Telemetry" }),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration.prototype, "telemetry", void 0);
    return UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration };
var UpdateThingRuntimeConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationRequestBody, _super);
    function UpdateThingRuntimeConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TelemetryConfiguration" }),
        __metadata("design:type", UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration)
    ], UpdateThingRuntimeConfigurationRequestBody.prototype, "telemetryConfiguration", void 0);
    return UpdateThingRuntimeConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationRequestBody };
var UpdateThingRuntimeConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationRequest, _super);
    function UpdateThingRuntimeConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingRuntimeConfigurationPathParams)
    ], UpdateThingRuntimeConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingRuntimeConfigurationHeaders)
    ], UpdateThingRuntimeConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateThingRuntimeConfigurationRequestBody)
    ], UpdateThingRuntimeConfigurationRequest.prototype, "request", void 0);
    return UpdateThingRuntimeConfigurationRequest;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationRequest };
var UpdateThingRuntimeConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationResponse, _super);
    function UpdateThingRuntimeConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingRuntimeConfigurationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateThingRuntimeConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingRuntimeConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateThingRuntimeConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateThingRuntimeConfigurationResponse.prototype, "updateThingRuntimeConfigurationResponse", void 0);
    return UpdateThingRuntimeConfigurationResponse;
}(SpeakeasyBase));
export { UpdateThingRuntimeConfigurationResponse };
