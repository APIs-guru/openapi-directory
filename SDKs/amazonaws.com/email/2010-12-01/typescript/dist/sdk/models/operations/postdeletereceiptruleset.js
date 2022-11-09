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
export var PostDeleteReceiptRuleSetActionEnum;
(function (PostDeleteReceiptRuleSetActionEnum) {
    PostDeleteReceiptRuleSetActionEnum["DeleteReceiptRuleSet"] = "DeleteReceiptRuleSet";
})(PostDeleteReceiptRuleSetActionEnum || (PostDeleteReceiptRuleSetActionEnum = {}));
export var PostDeleteReceiptRuleSetVersionEnum;
(function (PostDeleteReceiptRuleSetVersionEnum) {
    PostDeleteReceiptRuleSetVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteReceiptRuleSetVersionEnum || (PostDeleteReceiptRuleSetVersionEnum = {}));
var PostDeleteReceiptRuleSetQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptRuleSetQueryParams, _super);
    function PostDeleteReceiptRuleSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetQueryParams.prototype, "version", void 0);
    return PostDeleteReceiptRuleSetQueryParams;
}(SpeakeasyBase));
export { PostDeleteReceiptRuleSetQueryParams };
var PostDeleteReceiptRuleSetHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptRuleSetHeaders, _super);
    function PostDeleteReceiptRuleSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteReceiptRuleSetHeaders;
}(SpeakeasyBase));
export { PostDeleteReceiptRuleSetHeaders };
var PostDeleteReceiptRuleSetRequest = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptRuleSetRequest, _super);
    function PostDeleteReceiptRuleSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteReceiptRuleSetQueryParams)
    ], PostDeleteReceiptRuleSetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteReceiptRuleSetHeaders)
    ], PostDeleteReceiptRuleSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReceiptRuleSetRequest.prototype, "request", void 0);
    return PostDeleteReceiptRuleSetRequest;
}(SpeakeasyBase));
export { PostDeleteReceiptRuleSetRequest };
var PostDeleteReceiptRuleSetResponse = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptRuleSetResponse, _super);
    function PostDeleteReceiptRuleSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReceiptRuleSetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteReceiptRuleSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteReceiptRuleSetResponse.prototype, "statusCode", void 0);
    return PostDeleteReceiptRuleSetResponse;
}(SpeakeasyBase));
export { PostDeleteReceiptRuleSetResponse };
