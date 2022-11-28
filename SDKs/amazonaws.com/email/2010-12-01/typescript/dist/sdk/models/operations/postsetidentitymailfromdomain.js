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
export var PostSetIdentityMailFromDomainActionEnum;
(function (PostSetIdentityMailFromDomainActionEnum) {
    PostSetIdentityMailFromDomainActionEnum["SetIdentityMailFromDomain"] = "SetIdentityMailFromDomain";
})(PostSetIdentityMailFromDomainActionEnum || (PostSetIdentityMailFromDomainActionEnum = {}));
export var PostSetIdentityMailFromDomainVersionEnum;
(function (PostSetIdentityMailFromDomainVersionEnum) {
    PostSetIdentityMailFromDomainVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostSetIdentityMailFromDomainVersionEnum || (PostSetIdentityMailFromDomainVersionEnum = {}));
var PostSetIdentityMailFromDomainQueryParams = /** @class */ (function (_super) {
    __extends(PostSetIdentityMailFromDomainQueryParams, _super);
    function PostSetIdentityMailFromDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainQueryParams.prototype, "version", void 0);
    return PostSetIdentityMailFromDomainQueryParams;
}(SpeakeasyBase));
export { PostSetIdentityMailFromDomainQueryParams };
var PostSetIdentityMailFromDomainHeaders = /** @class */ (function (_super) {
    __extends(PostSetIdentityMailFromDomainHeaders, _super);
    function PostSetIdentityMailFromDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetIdentityMailFromDomainHeaders;
}(SpeakeasyBase));
export { PostSetIdentityMailFromDomainHeaders };
var PostSetIdentityMailFromDomainRequest = /** @class */ (function (_super) {
    __extends(PostSetIdentityMailFromDomainRequest, _super);
    function PostSetIdentityMailFromDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetIdentityMailFromDomainQueryParams)
    ], PostSetIdentityMailFromDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetIdentityMailFromDomainHeaders)
    ], PostSetIdentityMailFromDomainRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetIdentityMailFromDomainRequest.prototype, "request", void 0);
    return PostSetIdentityMailFromDomainRequest;
}(SpeakeasyBase));
export { PostSetIdentityMailFromDomainRequest };
var PostSetIdentityMailFromDomainResponse = /** @class */ (function (_super) {
    __extends(PostSetIdentityMailFromDomainResponse, _super);
    function PostSetIdentityMailFromDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSetIdentityMailFromDomainResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetIdentityMailFromDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetIdentityMailFromDomainResponse.prototype, "statusCode", void 0);
    return PostSetIdentityMailFromDomainResponse;
}(SpeakeasyBase));
export { PostSetIdentityMailFromDomainResponse };
