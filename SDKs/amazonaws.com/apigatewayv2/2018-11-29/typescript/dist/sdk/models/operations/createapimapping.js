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
var CreateApiMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateApiMappingPathParams, _super);
    function CreateApiMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], CreateApiMappingPathParams.prototype, "domainName", void 0);
    return CreateApiMappingPathParams;
}(SpeakeasyBase));
export { CreateApiMappingPathParams };
var CreateApiMappingHeaders = /** @class */ (function (_super) {
    __extends(CreateApiMappingHeaders, _super);
    function CreateApiMappingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateApiMappingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateApiMappingHeaders;
}(SpeakeasyBase));
export { CreateApiMappingHeaders };
var CreateApiMappingRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiMappingRequestBody, _super);
    function CreateApiMappingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiId" }),
        __metadata("design:type", String)
    ], CreateApiMappingRequestBody.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiMappingKey" }),
        __metadata("design:type", String)
    ], CreateApiMappingRequestBody.prototype, "apiMappingKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], CreateApiMappingRequestBody.prototype, "stage", void 0);
    return CreateApiMappingRequestBody;
}(SpeakeasyBase));
export { CreateApiMappingRequestBody };
var CreateApiMappingRequest = /** @class */ (function (_super) {
    __extends(CreateApiMappingRequest, _super);
    function CreateApiMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiMappingPathParams)
    ], CreateApiMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiMappingHeaders)
    ], CreateApiMappingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiMappingRequestBody)
    ], CreateApiMappingRequest.prototype, "request", void 0);
    return CreateApiMappingRequest;
}(SpeakeasyBase));
export { CreateApiMappingRequest };
var CreateApiMappingResponse = /** @class */ (function (_super) {
    __extends(CreateApiMappingResponse, _super);
    function CreateApiMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiMappingResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiMappingResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateApiMappingResponse)
    ], CreateApiMappingResponse.prototype, "createApiMappingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiMappingResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiMappingResponse.prototype, "tooManyRequestsException", void 0);
    return CreateApiMappingResponse;
}(SpeakeasyBase));
export { CreateApiMappingResponse };
