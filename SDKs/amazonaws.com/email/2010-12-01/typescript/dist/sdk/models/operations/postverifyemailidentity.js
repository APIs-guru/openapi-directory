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
export var PostVerifyEmailIdentityActionEnum;
(function (PostVerifyEmailIdentityActionEnum) {
    PostVerifyEmailIdentityActionEnum["VerifyEmailIdentity"] = "VerifyEmailIdentity";
})(PostVerifyEmailIdentityActionEnum || (PostVerifyEmailIdentityActionEnum = {}));
export var PostVerifyEmailIdentityVersionEnum;
(function (PostVerifyEmailIdentityVersionEnum) {
    PostVerifyEmailIdentityVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostVerifyEmailIdentityVersionEnum || (PostVerifyEmailIdentityVersionEnum = {}));
var PostVerifyEmailIdentityQueryParams = /** @class */ (function (_super) {
    __extends(PostVerifyEmailIdentityQueryParams, _super);
    function PostVerifyEmailIdentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityQueryParams.prototype, "version", void 0);
    return PostVerifyEmailIdentityQueryParams;
}(SpeakeasyBase));
export { PostVerifyEmailIdentityQueryParams };
var PostVerifyEmailIdentityHeaders = /** @class */ (function (_super) {
    __extends(PostVerifyEmailIdentityHeaders, _super);
    function PostVerifyEmailIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostVerifyEmailIdentityHeaders;
}(SpeakeasyBase));
export { PostVerifyEmailIdentityHeaders };
var PostVerifyEmailIdentityRequest = /** @class */ (function (_super) {
    __extends(PostVerifyEmailIdentityRequest, _super);
    function PostVerifyEmailIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVerifyEmailIdentityQueryParams)
    ], PostVerifyEmailIdentityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVerifyEmailIdentityHeaders)
    ], PostVerifyEmailIdentityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostVerifyEmailIdentityRequest.prototype, "request", void 0);
    return PostVerifyEmailIdentityRequest;
}(SpeakeasyBase));
export { PostVerifyEmailIdentityRequest };
var PostVerifyEmailIdentityResponse = /** @class */ (function (_super) {
    __extends(PostVerifyEmailIdentityResponse, _super);
    function PostVerifyEmailIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostVerifyEmailIdentityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVerifyEmailIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVerifyEmailIdentityResponse.prototype, "statusCode", void 0);
    return PostVerifyEmailIdentityResponse;
}(SpeakeasyBase));
export { PostVerifyEmailIdentityResponse };
