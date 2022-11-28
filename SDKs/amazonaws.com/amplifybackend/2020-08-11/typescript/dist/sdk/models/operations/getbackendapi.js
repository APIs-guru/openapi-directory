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
var GetBackendApiPathParams = /** @class */ (function (_super) {
    __extends(GetBackendApiPathParams, _super);
    function GetBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], GetBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], GetBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return GetBackendApiPathParams;
}(SpeakeasyBase));
export { GetBackendApiPathParams };
var GetBackendApiHeaders = /** @class */ (function (_super) {
    __extends(GetBackendApiHeaders, _super);
    function GetBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBackendApiHeaders;
}(SpeakeasyBase));
export { GetBackendApiHeaders };
// GetBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var GetBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBodyResourceConfig, _super);
    function GetBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType }),
        __metadata("design:type", Array)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiName" }),
        __metadata("design:type", String)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", shared.BackendApiConflictResolution)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", shared.BackendApiAuthType)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformSchema" }),
        __metadata("design:type", String)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return GetBackendApiRequestBodyResourceConfig;
}(SpeakeasyBase));
export { GetBackendApiRequestBodyResourceConfig };
var GetBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBody, _super);
    function GetBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", GetBackendApiRequestBodyResourceConfig)
    ], GetBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GetBackendApiRequestBody.prototype, "resourceName", void 0);
    return GetBackendApiRequestBody;
}(SpeakeasyBase));
export { GetBackendApiRequestBody };
var GetBackendApiRequest = /** @class */ (function (_super) {
    __extends(GetBackendApiRequest, _super);
    function GetBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackendApiPathParams)
    ], GetBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackendApiHeaders)
    ], GetBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetBackendApiRequestBody)
    ], GetBackendApiRequest.prototype, "request", void 0);
    return GetBackendApiRequest;
}(SpeakeasyBase));
export { GetBackendApiRequest };
var GetBackendApiResponse = /** @class */ (function (_super) {
    __extends(GetBackendApiResponse, _super);
    function GetBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBackendApiResponse)
    ], GetBackendApiResponse.prototype, "getBackendApiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return GetBackendApiResponse;
}(SpeakeasyBase));
export { GetBackendApiResponse };
