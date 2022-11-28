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
var UpdateBackendApiPathParams = /** @class */ (function (_super) {
    __extends(UpdateBackendApiPathParams, _super);
    function UpdateBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], UpdateBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return UpdateBackendApiPathParams;
}(SpeakeasyBase));
export { UpdateBackendApiPathParams };
var UpdateBackendApiHeaders = /** @class */ (function (_super) {
    __extends(UpdateBackendApiHeaders, _super);
    function UpdateBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBackendApiHeaders;
}(SpeakeasyBase));
export { UpdateBackendApiHeaders };
// UpdateBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var UpdateBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBodyResourceConfig, _super);
    function UpdateBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType }),
        __metadata("design:type", Array)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiName" }),
        __metadata("design:type", String)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", shared.BackendApiConflictResolution)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", shared.BackendApiAuthType)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformSchema" }),
        __metadata("design:type", String)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return UpdateBackendApiRequestBodyResourceConfig;
}(SpeakeasyBase));
export { UpdateBackendApiRequestBodyResourceConfig };
var UpdateBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBody, _super);
    function UpdateBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", UpdateBackendApiRequestBodyResourceConfig)
    ], UpdateBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], UpdateBackendApiRequestBody.prototype, "resourceName", void 0);
    return UpdateBackendApiRequestBody;
}(SpeakeasyBase));
export { UpdateBackendApiRequestBody };
var UpdateBackendApiRequest = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequest, _super);
    function UpdateBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBackendApiPathParams)
    ], UpdateBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBackendApiHeaders)
    ], UpdateBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBackendApiRequestBody)
    ], UpdateBackendApiRequest.prototype, "request", void 0);
    return UpdateBackendApiRequest;
}(SpeakeasyBase));
export { UpdateBackendApiRequest };
var UpdateBackendApiResponse = /** @class */ (function (_super) {
    __extends(UpdateBackendApiResponse, _super);
    function UpdateBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateBackendApiResponse)
    ], UpdateBackendApiResponse.prototype, "updateBackendApiResponse", void 0);
    return UpdateBackendApiResponse;
}(SpeakeasyBase));
export { UpdateBackendApiResponse };
