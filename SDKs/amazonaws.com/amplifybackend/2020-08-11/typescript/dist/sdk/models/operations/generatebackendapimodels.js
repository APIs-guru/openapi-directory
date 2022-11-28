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
var GenerateBackendApiModelsPathParams = /** @class */ (function (_super) {
    __extends(GenerateBackendApiModelsPathParams, _super);
    function GenerateBackendApiModelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsPathParams.prototype, "backendEnvironmentName", void 0);
    return GenerateBackendApiModelsPathParams;
}(SpeakeasyBase));
export { GenerateBackendApiModelsPathParams };
var GenerateBackendApiModelsHeaders = /** @class */ (function (_super) {
    __extends(GenerateBackendApiModelsHeaders, _super);
    function GenerateBackendApiModelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GenerateBackendApiModelsHeaders;
}(SpeakeasyBase));
export { GenerateBackendApiModelsHeaders };
var GenerateBackendApiModelsRequestBody = /** @class */ (function (_super) {
    __extends(GenerateBackendApiModelsRequestBody, _super);
    function GenerateBackendApiModelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsRequestBody.prototype, "resourceName", void 0);
    return GenerateBackendApiModelsRequestBody;
}(SpeakeasyBase));
export { GenerateBackendApiModelsRequestBody };
var GenerateBackendApiModelsRequest = /** @class */ (function (_super) {
    __extends(GenerateBackendApiModelsRequest, _super);
    function GenerateBackendApiModelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateBackendApiModelsPathParams)
    ], GenerateBackendApiModelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenerateBackendApiModelsHeaders)
    ], GenerateBackendApiModelsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GenerateBackendApiModelsRequestBody)
    ], GenerateBackendApiModelsRequest.prototype, "request", void 0);
    return GenerateBackendApiModelsRequest;
}(SpeakeasyBase));
export { GenerateBackendApiModelsRequest };
var GenerateBackendApiModelsResponse = /** @class */ (function (_super) {
    __extends(GenerateBackendApiModelsResponse, _super);
    function GenerateBackendApiModelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateBackendApiModelsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenerateBackendApiModelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateBackendApiModelsResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateBackendApiModelsResponse)
    ], GenerateBackendApiModelsResponse.prototype, "generateBackendApiModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateBackendApiModelsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenerateBackendApiModelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GenerateBackendApiModelsResponse.prototype, "tooManyRequestsException", void 0);
    return GenerateBackendApiModelsResponse;
}(SpeakeasyBase));
export { GenerateBackendApiModelsResponse };
