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
export var PostCreateReceiptRuleActionEnum;
(function (PostCreateReceiptRuleActionEnum) {
    PostCreateReceiptRuleActionEnum["CreateReceiptRule"] = "CreateReceiptRule";
})(PostCreateReceiptRuleActionEnum || (PostCreateReceiptRuleActionEnum = {}));
export var PostCreateReceiptRuleVersionEnum;
(function (PostCreateReceiptRuleVersionEnum) {
    PostCreateReceiptRuleVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateReceiptRuleVersionEnum || (PostCreateReceiptRuleVersionEnum = {}));
var PostCreateReceiptRuleQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateReceiptRuleQueryParams, _super);
    function PostCreateReceiptRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleQueryParams.prototype, "version", void 0);
    return PostCreateReceiptRuleQueryParams;
}(SpeakeasyBase));
export { PostCreateReceiptRuleQueryParams };
var PostCreateReceiptRuleHeaders = /** @class */ (function (_super) {
    __extends(PostCreateReceiptRuleHeaders, _super);
    function PostCreateReceiptRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateReceiptRuleHeaders;
}(SpeakeasyBase));
export { PostCreateReceiptRuleHeaders };
var PostCreateReceiptRuleRequest = /** @class */ (function (_super) {
    __extends(PostCreateReceiptRuleRequest, _super);
    function PostCreateReceiptRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateReceiptRuleQueryParams)
    ], PostCreateReceiptRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateReceiptRuleHeaders)
    ], PostCreateReceiptRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateReceiptRuleRequest.prototype, "request", void 0);
    return PostCreateReceiptRuleRequest;
}(SpeakeasyBase));
export { PostCreateReceiptRuleRequest };
var PostCreateReceiptRuleResponse = /** @class */ (function (_super) {
    __extends(PostCreateReceiptRuleResponse, _super);
    function PostCreateReceiptRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateReceiptRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateReceiptRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateReceiptRuleResponse.prototype, "statusCode", void 0);
    return PostCreateReceiptRuleResponse;
}(SpeakeasyBase));
export { PostCreateReceiptRuleResponse };
