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
var CreateApiCachePathParams = /** @class */ (function (_super) {
    __extends(CreateApiCachePathParams, _super);
    function CreateApiCachePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateApiCachePathParams.prototype, "apiId", void 0);
    return CreateApiCachePathParams;
}(SpeakeasyBase));
export { CreateApiCachePathParams };
var CreateApiCacheHeaders = /** @class */ (function (_super) {
    __extends(CreateApiCacheHeaders, _super);
    function CreateApiCacheHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateApiCacheHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateApiCacheHeaders;
}(SpeakeasyBase));
export { CreateApiCacheHeaders };
export var CreateApiCacheRequestBodyApiCachingBehaviorEnum;
(function (CreateApiCacheRequestBodyApiCachingBehaviorEnum) {
    CreateApiCacheRequestBodyApiCachingBehaviorEnum["FullRequestCaching"] = "FULL_REQUEST_CACHING";
    CreateApiCacheRequestBodyApiCachingBehaviorEnum["PerResolverCaching"] = "PER_RESOLVER_CACHING";
})(CreateApiCacheRequestBodyApiCachingBehaviorEnum || (CreateApiCacheRequestBodyApiCachingBehaviorEnum = {}));
export var CreateApiCacheRequestBodyTypeEnum;
(function (CreateApiCacheRequestBodyTypeEnum) {
    CreateApiCacheRequestBodyTypeEnum["T2Small"] = "T2_SMALL";
    CreateApiCacheRequestBodyTypeEnum["T2Medium"] = "T2_MEDIUM";
    CreateApiCacheRequestBodyTypeEnum["R4Large"] = "R4_LARGE";
    CreateApiCacheRequestBodyTypeEnum["R4Xlarge"] = "R4_XLARGE";
    CreateApiCacheRequestBodyTypeEnum["R42Xlarge"] = "R4_2XLARGE";
    CreateApiCacheRequestBodyTypeEnum["R44Xlarge"] = "R4_4XLARGE";
    CreateApiCacheRequestBodyTypeEnum["R48Xlarge"] = "R4_8XLARGE";
    CreateApiCacheRequestBodyTypeEnum["Small"] = "SMALL";
    CreateApiCacheRequestBodyTypeEnum["Medium"] = "MEDIUM";
    CreateApiCacheRequestBodyTypeEnum["Large"] = "LARGE";
    CreateApiCacheRequestBodyTypeEnum["Xlarge"] = "XLARGE";
    CreateApiCacheRequestBodyTypeEnum["Large2X"] = "LARGE_2X";
    CreateApiCacheRequestBodyTypeEnum["Large4X"] = "LARGE_4X";
    CreateApiCacheRequestBodyTypeEnum["Large8X"] = "LARGE_8X";
    CreateApiCacheRequestBodyTypeEnum["Large12X"] = "LARGE_12X";
})(CreateApiCacheRequestBodyTypeEnum || (CreateApiCacheRequestBodyTypeEnum = {}));
var CreateApiCacheRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiCacheRequestBody, _super);
    function CreateApiCacheRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiCachingBehavior" }),
        __metadata("design:type", String)
    ], CreateApiCacheRequestBody.prototype, "apiCachingBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=atRestEncryptionEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateApiCacheRequestBody.prototype, "atRestEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitEncryptionEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateApiCacheRequestBody.prototype, "transitEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateApiCacheRequestBody.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateApiCacheRequestBody.prototype, "type", void 0);
    return CreateApiCacheRequestBody;
}(SpeakeasyBase));
export { CreateApiCacheRequestBody };
var CreateApiCacheRequest = /** @class */ (function (_super) {
    __extends(CreateApiCacheRequest, _super);
    function CreateApiCacheRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiCachePathParams)
    ], CreateApiCacheRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiCacheHeaders)
    ], CreateApiCacheRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiCacheRequestBody)
    ], CreateApiCacheRequest.prototype, "request", void 0);
    return CreateApiCacheRequest;
}(SpeakeasyBase));
export { CreateApiCacheRequest };
var CreateApiCacheResponse = /** @class */ (function (_super) {
    __extends(CreateApiCacheResponse, _super);
    function CreateApiCacheResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiCacheResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiCacheResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiCacheResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateApiCacheResponse)
    ], CreateApiCacheResponse.prototype, "createApiCacheResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiCacheResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiCacheResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiCacheResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiCacheResponse.prototype, "unauthorizedException", void 0);
    return CreateApiCacheResponse;
}(SpeakeasyBase));
export { CreateApiCacheResponse };
