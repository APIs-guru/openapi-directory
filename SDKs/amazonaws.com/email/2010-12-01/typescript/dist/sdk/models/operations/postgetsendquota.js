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
export var PostGetSendQuotaActionEnum;
(function (PostGetSendQuotaActionEnum) {
    PostGetSendQuotaActionEnum["GetSendQuota"] = "GetSendQuota";
})(PostGetSendQuotaActionEnum || (PostGetSendQuotaActionEnum = {}));
export var PostGetSendQuotaVersionEnum;
(function (PostGetSendQuotaVersionEnum) {
    PostGetSendQuotaVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostGetSendQuotaVersionEnum || (PostGetSendQuotaVersionEnum = {}));
var PostGetSendQuotaQueryParams = /** @class */ (function (_super) {
    __extends(PostGetSendQuotaQueryParams, _super);
    function PostGetSendQuotaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaQueryParams.prototype, "version", void 0);
    return PostGetSendQuotaQueryParams;
}(SpeakeasyBase));
export { PostGetSendQuotaQueryParams };
var PostGetSendQuotaHeaders = /** @class */ (function (_super) {
    __extends(PostGetSendQuotaHeaders, _super);
    function PostGetSendQuotaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetSendQuotaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetSendQuotaHeaders;
}(SpeakeasyBase));
export { PostGetSendQuotaHeaders };
var PostGetSendQuotaRequest = /** @class */ (function (_super) {
    __extends(PostGetSendQuotaRequest, _super);
    function PostGetSendQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetSendQuotaQueryParams)
    ], PostGetSendQuotaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetSendQuotaHeaders)
    ], PostGetSendQuotaRequest.prototype, "headers", void 0);
    return PostGetSendQuotaRequest;
}(SpeakeasyBase));
export { PostGetSendQuotaRequest };
var PostGetSendQuotaResponse = /** @class */ (function (_super) {
    __extends(PostGetSendQuotaResponse, _super);
    function PostGetSendQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetSendQuotaResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetSendQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetSendQuotaResponse.prototype, "statusCode", void 0);
    return PostGetSendQuotaResponse;
}(SpeakeasyBase));
export { PostGetSendQuotaResponse };
