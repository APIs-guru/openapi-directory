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
var CreateUsagePlanKeyPathParams = /** @class */ (function (_super) {
    __extends(CreateUsagePlanKeyPathParams, _super);
    function CreateUsagePlanKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=usageplanId" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyPathParams.prototype, "usageplanId", void 0);
    return CreateUsagePlanKeyPathParams;
}(SpeakeasyBase));
export { CreateUsagePlanKeyPathParams };
var CreateUsagePlanKeyHeaders = /** @class */ (function (_super) {
    __extends(CreateUsagePlanKeyHeaders, _super);
    function CreateUsagePlanKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateUsagePlanKeyHeaders;
}(SpeakeasyBase));
export { CreateUsagePlanKeyHeaders };
var CreateUsagePlanKeyRequestBody = /** @class */ (function (_super) {
    __extends(CreateUsagePlanKeyRequestBody, _super);
    function CreateUsagePlanKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=keyId" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyRequestBody.prototype, "keyId", void 0);
    __decorate([
        Metadata({ data: "json, name=keyType" }),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyRequestBody.prototype, "keyType", void 0);
    return CreateUsagePlanKeyRequestBody;
}(SpeakeasyBase));
export { CreateUsagePlanKeyRequestBody };
var CreateUsagePlanKeyRequest = /** @class */ (function (_super) {
    __extends(CreateUsagePlanKeyRequest, _super);
    function CreateUsagePlanKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUsagePlanKeyPathParams)
    ], CreateUsagePlanKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUsagePlanKeyHeaders)
    ], CreateUsagePlanKeyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateUsagePlanKeyRequestBody)
    ], CreateUsagePlanKeyRequest.prototype, "request", void 0);
    return CreateUsagePlanKeyRequest;
}(SpeakeasyBase));
export { CreateUsagePlanKeyRequest };
var CreateUsagePlanKeyResponse = /** @class */ (function (_super) {
    __extends(CreateUsagePlanKeyResponse, _super);
    function CreateUsagePlanKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUsagePlanKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUsagePlanKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUsagePlanKeyResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UsagePlanKey)
    ], CreateUsagePlanKeyResponse.prototype, "usagePlanKey", void 0);
    return CreateUsagePlanKeyResponse;
}(SpeakeasyBase));
export { CreateUsagePlanKeyResponse };
