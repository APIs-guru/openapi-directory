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
var ImportBackendAuthPathParams = /** @class */ (function (_super) {
    __extends(ImportBackendAuthPathParams, _super);
    function ImportBackendAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], ImportBackendAuthPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], ImportBackendAuthPathParams.prototype, "backendEnvironmentName", void 0);
    return ImportBackendAuthPathParams;
}(SpeakeasyBase));
export { ImportBackendAuthPathParams };
var ImportBackendAuthHeaders = /** @class */ (function (_super) {
    __extends(ImportBackendAuthHeaders, _super);
    function ImportBackendAuthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportBackendAuthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportBackendAuthHeaders;
}(SpeakeasyBase));
export { ImportBackendAuthHeaders };
var ImportBackendAuthRequestBody = /** @class */ (function (_super) {
    __extends(ImportBackendAuthRequestBody, _super);
    function ImportBackendAuthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityPoolId" }),
        __metadata("design:type", String)
    ], ImportBackendAuthRequestBody.prototype, "identityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeClientId" }),
        __metadata("design:type", String)
    ], ImportBackendAuthRequestBody.prototype, "nativeClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPoolId" }),
        __metadata("design:type", String)
    ], ImportBackendAuthRequestBody.prototype, "userPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webClientId" }),
        __metadata("design:type", String)
    ], ImportBackendAuthRequestBody.prototype, "webClientId", void 0);
    return ImportBackendAuthRequestBody;
}(SpeakeasyBase));
export { ImportBackendAuthRequestBody };
var ImportBackendAuthRequest = /** @class */ (function (_super) {
    __extends(ImportBackendAuthRequest, _super);
    function ImportBackendAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportBackendAuthPathParams)
    ], ImportBackendAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportBackendAuthHeaders)
    ], ImportBackendAuthRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportBackendAuthRequestBody)
    ], ImportBackendAuthRequest.prototype, "request", void 0);
    return ImportBackendAuthRequest;
}(SpeakeasyBase));
export { ImportBackendAuthRequest };
var ImportBackendAuthResponse = /** @class */ (function (_super) {
    __extends(ImportBackendAuthResponse, _super);
    function ImportBackendAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportBackendAuthResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportBackendAuthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportBackendAuthResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImportBackendAuthResponse)
    ], ImportBackendAuthResponse.prototype, "importBackendAuthResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportBackendAuthResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportBackendAuthResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ImportBackendAuthResponse.prototype, "tooManyRequestsException", void 0);
    return ImportBackendAuthResponse;
}(SpeakeasyBase));
export { ImportBackendAuthResponse };
