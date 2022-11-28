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
var CreateBackendApiPathParams = /** @class */ (function (_super) {
    __extends(CreateBackendApiPathParams, _super);
    function CreateBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendApiPathParams.prototype, "appId", void 0);
    return CreateBackendApiPathParams;
}(SpeakeasyBase));
export { CreateBackendApiPathParams };
var CreateBackendApiHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendApiHeaders, _super);
    function CreateBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendApiHeaders;
}(SpeakeasyBase));
export { CreateBackendApiHeaders };
// CreateBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var CreateBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBodyResourceConfig, _super);
    function CreateBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType }),
        __metadata("design:type", Array)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiName" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", shared.BackendApiConflictResolution)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", shared.BackendApiAuthType)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformSchema" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return CreateBackendApiRequestBodyResourceConfig;
}(SpeakeasyBase));
export { CreateBackendApiRequestBodyResourceConfig };
var CreateBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBody, _super);
    function CreateBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBody.prototype, "backendEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", CreateBackendApiRequestBodyResourceConfig)
    ], CreateBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBody.prototype, "resourceName", void 0);
    return CreateBackendApiRequestBody;
}(SpeakeasyBase));
export { CreateBackendApiRequestBody };
var CreateBackendApiRequest = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequest, _super);
    function CreateBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBackendApiPathParams)
    ], CreateBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBackendApiHeaders)
    ], CreateBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendApiRequestBody)
    ], CreateBackendApiRequest.prototype, "request", void 0);
    return CreateBackendApiRequest;
}(SpeakeasyBase));
export { CreateBackendApiRequest };
var CreateBackendApiResponse = /** @class */ (function (_super) {
    __extends(CreateBackendApiResponse, _super);
    function CreateBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBackendApiResponse)
    ], CreateBackendApiResponse.prototype, "createBackendApiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return CreateBackendApiResponse;
}(SpeakeasyBase));
export { CreateBackendApiResponse };
