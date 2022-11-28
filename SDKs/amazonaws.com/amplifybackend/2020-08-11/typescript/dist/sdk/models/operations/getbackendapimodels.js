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
var GetBackendApiModelsPathParams = /** @class */ (function (_super) {
    __extends(GetBackendApiModelsPathParams, _super);
    function GetBackendApiModelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsPathParams.prototype, "backendEnvironmentName", void 0);
    return GetBackendApiModelsPathParams;
}(SpeakeasyBase));
export { GetBackendApiModelsPathParams };
var GetBackendApiModelsHeaders = /** @class */ (function (_super) {
    __extends(GetBackendApiModelsHeaders, _super);
    function GetBackendApiModelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBackendApiModelsHeaders;
}(SpeakeasyBase));
export { GetBackendApiModelsHeaders };
var GetBackendApiModelsRequestBody = /** @class */ (function (_super) {
    __extends(GetBackendApiModelsRequestBody, _super);
    function GetBackendApiModelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GetBackendApiModelsRequestBody.prototype, "resourceName", void 0);
    return GetBackendApiModelsRequestBody;
}(SpeakeasyBase));
export { GetBackendApiModelsRequestBody };
var GetBackendApiModelsRequest = /** @class */ (function (_super) {
    __extends(GetBackendApiModelsRequest, _super);
    function GetBackendApiModelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackendApiModelsPathParams)
    ], GetBackendApiModelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackendApiModelsHeaders)
    ], GetBackendApiModelsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetBackendApiModelsRequestBody)
    ], GetBackendApiModelsRequest.prototype, "request", void 0);
    return GetBackendApiModelsRequest;
}(SpeakeasyBase));
export { GetBackendApiModelsRequest };
var GetBackendApiModelsResponse = /** @class */ (function (_super) {
    __extends(GetBackendApiModelsResponse, _super);
    function GetBackendApiModelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiModelsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBackendApiModelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiModelsResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBackendApiModelsResponse)
    ], GetBackendApiModelsResponse.prototype, "getBackendApiModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiModelsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBackendApiModelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBackendApiModelsResponse.prototype, "tooManyRequestsException", void 0);
    return GetBackendApiModelsResponse;
}(SpeakeasyBase));
export { GetBackendApiModelsResponse };
