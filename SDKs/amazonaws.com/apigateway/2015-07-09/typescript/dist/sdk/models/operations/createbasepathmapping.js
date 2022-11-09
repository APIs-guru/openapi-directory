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
var CreateBasePathMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateBasePathMappingPathParams, _super);
    function CreateBasePathMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingPathParams.prototype, "domainName", void 0);
    return CreateBasePathMappingPathParams;
}(SpeakeasyBase));
export { CreateBasePathMappingPathParams };
var CreateBasePathMappingHeaders = /** @class */ (function (_super) {
    __extends(CreateBasePathMappingHeaders, _super);
    function CreateBasePathMappingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBasePathMappingHeaders;
}(SpeakeasyBase));
export { CreateBasePathMappingHeaders };
var CreateBasePathMappingRequestBody = /** @class */ (function (_super) {
    __extends(CreateBasePathMappingRequestBody, _super);
    function CreateBasePathMappingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=basePath" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingRequestBody.prototype, "basePath", void 0);
    __decorate([
        Metadata({ data: "json, name=restApiId" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingRequestBody.prototype, "restApiId", void 0);
    __decorate([
        Metadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], CreateBasePathMappingRequestBody.prototype, "stage", void 0);
    return CreateBasePathMappingRequestBody;
}(SpeakeasyBase));
export { CreateBasePathMappingRequestBody };
var CreateBasePathMappingRequest = /** @class */ (function (_super) {
    __extends(CreateBasePathMappingRequest, _super);
    function CreateBasePathMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBasePathMappingPathParams)
    ], CreateBasePathMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBasePathMappingHeaders)
    ], CreateBasePathMappingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBasePathMappingRequestBody)
    ], CreateBasePathMappingRequest.prototype, "request", void 0);
    return CreateBasePathMappingRequest;
}(SpeakeasyBase));
export { CreateBasePathMappingRequest };
var CreateBasePathMappingResponse = /** @class */ (function (_super) {
    __extends(CreateBasePathMappingResponse, _super);
    function CreateBasePathMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BasePathMapping)
    ], CreateBasePathMappingResponse.prototype, "basePathMapping", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBasePathMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBasePathMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBasePathMappingResponse.prototype, "unauthorizedException", void 0);
    return CreateBasePathMappingResponse;
}(SpeakeasyBase));
export { CreateBasePathMappingResponse };
