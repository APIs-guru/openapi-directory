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
export var PostUpdateReceiptRuleActionEnum;
(function (PostUpdateReceiptRuleActionEnum) {
    PostUpdateReceiptRuleActionEnum["UpdateReceiptRule"] = "UpdateReceiptRule";
})(PostUpdateReceiptRuleActionEnum || (PostUpdateReceiptRuleActionEnum = {}));
export var PostUpdateReceiptRuleVersionEnum;
(function (PostUpdateReceiptRuleVersionEnum) {
    PostUpdateReceiptRuleVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostUpdateReceiptRuleVersionEnum || (PostUpdateReceiptRuleVersionEnum = {}));
var PostUpdateReceiptRuleQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateReceiptRuleQueryParams, _super);
    function PostUpdateReceiptRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleQueryParams.prototype, "version", void 0);
    return PostUpdateReceiptRuleQueryParams;
}(SpeakeasyBase));
export { PostUpdateReceiptRuleQueryParams };
var PostUpdateReceiptRuleHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateReceiptRuleHeaders, _super);
    function PostUpdateReceiptRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateReceiptRuleHeaders;
}(SpeakeasyBase));
export { PostUpdateReceiptRuleHeaders };
var PostUpdateReceiptRuleRequest = /** @class */ (function (_super) {
    __extends(PostUpdateReceiptRuleRequest, _super);
    function PostUpdateReceiptRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateReceiptRuleQueryParams)
    ], PostUpdateReceiptRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateReceiptRuleHeaders)
    ], PostUpdateReceiptRuleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateReceiptRuleRequest.prototype, "request", void 0);
    return PostUpdateReceiptRuleRequest;
}(SpeakeasyBase));
export { PostUpdateReceiptRuleRequest };
var PostUpdateReceiptRuleResponse = /** @class */ (function (_super) {
    __extends(PostUpdateReceiptRuleResponse, _super);
    function PostUpdateReceiptRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateReceiptRuleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateReceiptRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateReceiptRuleResponse.prototype, "statusCode", void 0);
    return PostUpdateReceiptRuleResponse;
}(SpeakeasyBase));
export { PostUpdateReceiptRuleResponse };
