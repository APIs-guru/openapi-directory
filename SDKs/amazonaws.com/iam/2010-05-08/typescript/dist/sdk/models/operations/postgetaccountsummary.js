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
export var PostGetAccountSummaryActionEnum;
(function (PostGetAccountSummaryActionEnum) {
    PostGetAccountSummaryActionEnum["GetAccountSummary"] = "GetAccountSummary";
})(PostGetAccountSummaryActionEnum || (PostGetAccountSummaryActionEnum = {}));
export var PostGetAccountSummaryVersionEnum;
(function (PostGetAccountSummaryVersionEnum) {
    PostGetAccountSummaryVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetAccountSummaryVersionEnum || (PostGetAccountSummaryVersionEnum = {}));
var PostGetAccountSummaryQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAccountSummaryQueryParams, _super);
    function PostGetAccountSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryQueryParams.prototype, "version", void 0);
    return PostGetAccountSummaryQueryParams;
}(SpeakeasyBase));
export { PostGetAccountSummaryQueryParams };
var PostGetAccountSummaryHeaders = /** @class */ (function (_super) {
    __extends(PostGetAccountSummaryHeaders, _super);
    function PostGetAccountSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAccountSummaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAccountSummaryHeaders;
}(SpeakeasyBase));
export { PostGetAccountSummaryHeaders };
var PostGetAccountSummaryRequest = /** @class */ (function (_super) {
    __extends(PostGetAccountSummaryRequest, _super);
    function PostGetAccountSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccountSummaryQueryParams)
    ], PostGetAccountSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccountSummaryHeaders)
    ], PostGetAccountSummaryRequest.prototype, "headers", void 0);
    return PostGetAccountSummaryRequest;
}(SpeakeasyBase));
export { PostGetAccountSummaryRequest };
var PostGetAccountSummaryResponse = /** @class */ (function (_super) {
    __extends(PostGetAccountSummaryResponse, _super);
    function PostGetAccountSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAccountSummaryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetAccountSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetAccountSummaryResponse.prototype, "statusCode", void 0);
    return PostGetAccountSummaryResponse;
}(SpeakeasyBase));
export { PostGetAccountSummaryResponse };
