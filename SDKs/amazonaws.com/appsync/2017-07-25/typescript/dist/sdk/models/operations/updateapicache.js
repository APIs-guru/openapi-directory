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
var UpdateApiCachePathParams = /** @class */ (function (_super) {
    __extends(UpdateApiCachePathParams, _super);
    function UpdateApiCachePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateApiCachePathParams.prototype, "apiId", void 0);
    return UpdateApiCachePathParams;
}(SpeakeasyBase));
export { UpdateApiCachePathParams };
var UpdateApiCacheHeaders = /** @class */ (function (_super) {
    __extends(UpdateApiCacheHeaders, _super);
    function UpdateApiCacheHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApiCacheHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApiCacheHeaders;
}(SpeakeasyBase));
export { UpdateApiCacheHeaders };
export var UpdateApiCacheRequestBodyApiCachingBehaviorEnum;
(function (UpdateApiCacheRequestBodyApiCachingBehaviorEnum) {
    UpdateApiCacheRequestBodyApiCachingBehaviorEnum["FullRequestCaching"] = "FULL_REQUEST_CACHING";
    UpdateApiCacheRequestBodyApiCachingBehaviorEnum["PerResolverCaching"] = "PER_RESOLVER_CACHING";
})(UpdateApiCacheRequestBodyApiCachingBehaviorEnum || (UpdateApiCacheRequestBodyApiCachingBehaviorEnum = {}));
export var UpdateApiCacheRequestBodyTypeEnum;
(function (UpdateApiCacheRequestBodyTypeEnum) {
    UpdateApiCacheRequestBodyTypeEnum["T2Small"] = "T2_SMALL";
    UpdateApiCacheRequestBodyTypeEnum["T2Medium"] = "T2_MEDIUM";
    UpdateApiCacheRequestBodyTypeEnum["R4Large"] = "R4_LARGE";
    UpdateApiCacheRequestBodyTypeEnum["R4Xlarge"] = "R4_XLARGE";
    UpdateApiCacheRequestBodyTypeEnum["R42Xlarge"] = "R4_2XLARGE";
    UpdateApiCacheRequestBodyTypeEnum["R44Xlarge"] = "R4_4XLARGE";
    UpdateApiCacheRequestBodyTypeEnum["R48Xlarge"] = "R4_8XLARGE";
    UpdateApiCacheRequestBodyTypeEnum["Small"] = "SMALL";
    UpdateApiCacheRequestBodyTypeEnum["Medium"] = "MEDIUM";
    UpdateApiCacheRequestBodyTypeEnum["Large"] = "LARGE";
    UpdateApiCacheRequestBodyTypeEnum["Xlarge"] = "XLARGE";
    UpdateApiCacheRequestBodyTypeEnum["Large2X"] = "LARGE_2X";
    UpdateApiCacheRequestBodyTypeEnum["Large4X"] = "LARGE_4X";
    UpdateApiCacheRequestBodyTypeEnum["Large8X"] = "LARGE_8X";
    UpdateApiCacheRequestBodyTypeEnum["Large12X"] = "LARGE_12X";
})(UpdateApiCacheRequestBodyTypeEnum || (UpdateApiCacheRequestBodyTypeEnum = {}));
var UpdateApiCacheRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApiCacheRequestBody, _super);
    function UpdateApiCacheRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiCachingBehavior" }),
        __metadata("design:type", String)
    ], UpdateApiCacheRequestBody.prototype, "apiCachingBehavior", void 0);
    __decorate([
        Metadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], UpdateApiCacheRequestBody.prototype, "ttl", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateApiCacheRequestBody.prototype, "type", void 0);
    return UpdateApiCacheRequestBody;
}(SpeakeasyBase));
export { UpdateApiCacheRequestBody };
var UpdateApiCacheRequest = /** @class */ (function (_super) {
    __extends(UpdateApiCacheRequest, _super);
    function UpdateApiCacheRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApiCachePathParams)
    ], UpdateApiCacheRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApiCacheHeaders)
    ], UpdateApiCacheRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApiCacheRequestBody)
    ], UpdateApiCacheRequest.prototype, "request", void 0);
    return UpdateApiCacheRequest;
}(SpeakeasyBase));
export { UpdateApiCacheRequest };
var UpdateApiCacheResponse = /** @class */ (function (_super) {
    __extends(UpdateApiCacheResponse, _super);
    function UpdateApiCacheResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateApiCacheResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateApiCacheResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateApiCacheResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateApiCacheResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateApiCacheResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateApiCacheResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateApiCacheResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateApiCacheResponse)
    ], UpdateApiCacheResponse.prototype, "updateApiCacheResponse", void 0);
    return UpdateApiCacheResponse;
}(SpeakeasyBase));
export { UpdateApiCacheResponse };
