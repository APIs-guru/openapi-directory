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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateApiKeyHeaders = /** @class */ (function (_super) {
    __extends(CreateApiKeyHeaders, _super);
    function CreateApiKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateApiKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateApiKeyHeaders;
}(SpeakeasyBase));
export { CreateApiKeyHeaders };
var CreateApiKeyRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiKeyRequestBody, _super);
    function CreateApiKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], CreateApiKeyRequestBody.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateApiKeyRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateApiKeyRequestBody.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "json, name=generateDistinctId" }),
        __metadata("design:type", Boolean)
    ], CreateApiKeyRequestBody.prototype, "generateDistinctId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApiKeyRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=stageKeys", elemType: shared.StageKey }),
        __metadata("design:type", Array)
    ], CreateApiKeyRequestBody.prototype, "stageKeys", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateApiKeyRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateApiKeyRequestBody.prototype, "value", void 0);
    return CreateApiKeyRequestBody;
}(SpeakeasyBase));
export { CreateApiKeyRequestBody };
var CreateApiKeyRequest = /** @class */ (function (_super) {
    __extends(CreateApiKeyRequest, _super);
    function CreateApiKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateApiKeyHeaders)
    ], CreateApiKeyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiKeyRequestBody)
    ], CreateApiKeyRequest.prototype, "request", void 0);
    return CreateApiKeyRequest;
}(SpeakeasyBase));
export { CreateApiKeyRequest };
var CreateApiKeyResponse = /** @class */ (function (_super) {
    __extends(CreateApiKeyResponse, _super);
    function CreateApiKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiKey)
    ], CreateApiKeyResponse.prototype, "apiKey", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateApiKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateApiKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateApiKeyResponse.prototype, "unauthorizedException", void 0);
    return CreateApiKeyResponse;
}(SpeakeasyBase));
export { CreateApiKeyResponse };
