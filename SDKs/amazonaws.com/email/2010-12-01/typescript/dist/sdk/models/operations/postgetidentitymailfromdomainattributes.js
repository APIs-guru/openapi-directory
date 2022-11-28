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
export var PostGetIdentityMailFromDomainAttributesActionEnum;
(function (PostGetIdentityMailFromDomainAttributesActionEnum) {
    PostGetIdentityMailFromDomainAttributesActionEnum["GetIdentityMailFromDomainAttributes"] = "GetIdentityMailFromDomainAttributes";
})(PostGetIdentityMailFromDomainAttributesActionEnum || (PostGetIdentityMailFromDomainAttributesActionEnum = {}));
export var PostGetIdentityMailFromDomainAttributesVersionEnum;
(function (PostGetIdentityMailFromDomainAttributesVersionEnum) {
    PostGetIdentityMailFromDomainAttributesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostGetIdentityMailFromDomainAttributesVersionEnum || (PostGetIdentityMailFromDomainAttributesVersionEnum = {}));
var PostGetIdentityMailFromDomainAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostGetIdentityMailFromDomainAttributesQueryParams, _super);
    function PostGetIdentityMailFromDomainAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesQueryParams.prototype, "version", void 0);
    return PostGetIdentityMailFromDomainAttributesQueryParams;
}(SpeakeasyBase));
export { PostGetIdentityMailFromDomainAttributesQueryParams };
var PostGetIdentityMailFromDomainAttributesHeaders = /** @class */ (function (_super) {
    __extends(PostGetIdentityMailFromDomainAttributesHeaders, _super);
    function PostGetIdentityMailFromDomainAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetIdentityMailFromDomainAttributesHeaders;
}(SpeakeasyBase));
export { PostGetIdentityMailFromDomainAttributesHeaders };
var PostGetIdentityMailFromDomainAttributesRequest = /** @class */ (function (_super) {
    __extends(PostGetIdentityMailFromDomainAttributesRequest, _super);
    function PostGetIdentityMailFromDomainAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetIdentityMailFromDomainAttributesQueryParams)
    ], PostGetIdentityMailFromDomainAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetIdentityMailFromDomainAttributesHeaders)
    ], PostGetIdentityMailFromDomainAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetIdentityMailFromDomainAttributesRequest.prototype, "request", void 0);
    return PostGetIdentityMailFromDomainAttributesRequest;
}(SpeakeasyBase));
export { PostGetIdentityMailFromDomainAttributesRequest };
var PostGetIdentityMailFromDomainAttributesResponse = /** @class */ (function (_super) {
    __extends(PostGetIdentityMailFromDomainAttributesResponse, _super);
    function PostGetIdentityMailFromDomainAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetIdentityMailFromDomainAttributesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetIdentityMailFromDomainAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetIdentityMailFromDomainAttributesResponse.prototype, "statusCode", void 0);
    return PostGetIdentityMailFromDomainAttributesResponse;
}(SpeakeasyBase));
export { PostGetIdentityMailFromDomainAttributesResponse };
