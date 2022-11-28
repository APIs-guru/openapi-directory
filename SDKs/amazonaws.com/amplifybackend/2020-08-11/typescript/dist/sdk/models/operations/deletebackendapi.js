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
var DeleteBackendApiPathParams = /** @class */ (function (_super) {
    __extends(DeleteBackendApiPathParams, _super);
    function DeleteBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], DeleteBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], DeleteBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return DeleteBackendApiPathParams;
}(SpeakeasyBase));
export { DeleteBackendApiPathParams };
var DeleteBackendApiHeaders = /** @class */ (function (_super) {
    __extends(DeleteBackendApiHeaders, _super);
    function DeleteBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteBackendApiHeaders;
}(SpeakeasyBase));
export { DeleteBackendApiHeaders };
// DeleteBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var DeleteBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBodyResourceConfig, _super);
    function DeleteBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType }),
        __metadata("design:type", Array)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiName" }),
        __metadata("design:type", String)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", shared.BackendApiConflictResolution)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", shared.BackendApiAuthType)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformSchema" }),
        __metadata("design:type", String)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return DeleteBackendApiRequestBodyResourceConfig;
}(SpeakeasyBase));
export { DeleteBackendApiRequestBodyResourceConfig };
var DeleteBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBody, _super);
    function DeleteBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", DeleteBackendApiRequestBodyResourceConfig)
    ], DeleteBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], DeleteBackendApiRequestBody.prototype, "resourceName", void 0);
    return DeleteBackendApiRequestBody;
}(SpeakeasyBase));
export { DeleteBackendApiRequestBody };
var DeleteBackendApiRequest = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequest, _super);
    function DeleteBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBackendApiPathParams)
    ], DeleteBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBackendApiHeaders)
    ], DeleteBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteBackendApiRequestBody)
    ], DeleteBackendApiRequest.prototype, "request", void 0);
    return DeleteBackendApiRequest;
}(SpeakeasyBase));
export { DeleteBackendApiRequest };
var DeleteBackendApiResponse = /** @class */ (function (_super) {
    __extends(DeleteBackendApiResponse, _super);
    function DeleteBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteBackendApiResponse)
    ], DeleteBackendApiResponse.prototype, "deleteBackendApiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteBackendApiResponse;
}(SpeakeasyBase));
export { DeleteBackendApiResponse };
