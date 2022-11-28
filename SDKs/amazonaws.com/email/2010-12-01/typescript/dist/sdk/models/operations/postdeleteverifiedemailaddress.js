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
export var PostDeleteVerifiedEmailAddressActionEnum;
(function (PostDeleteVerifiedEmailAddressActionEnum) {
    PostDeleteVerifiedEmailAddressActionEnum["DeleteVerifiedEmailAddress"] = "DeleteVerifiedEmailAddress";
})(PostDeleteVerifiedEmailAddressActionEnum || (PostDeleteVerifiedEmailAddressActionEnum = {}));
export var PostDeleteVerifiedEmailAddressVersionEnum;
(function (PostDeleteVerifiedEmailAddressVersionEnum) {
    PostDeleteVerifiedEmailAddressVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteVerifiedEmailAddressVersionEnum || (PostDeleteVerifiedEmailAddressVersionEnum = {}));
var PostDeleteVerifiedEmailAddressQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteVerifiedEmailAddressQueryParams, _super);
    function PostDeleteVerifiedEmailAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressQueryParams.prototype, "version", void 0);
    return PostDeleteVerifiedEmailAddressQueryParams;
}(SpeakeasyBase));
export { PostDeleteVerifiedEmailAddressQueryParams };
var PostDeleteVerifiedEmailAddressHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteVerifiedEmailAddressHeaders, _super);
    function PostDeleteVerifiedEmailAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteVerifiedEmailAddressHeaders;
}(SpeakeasyBase));
export { PostDeleteVerifiedEmailAddressHeaders };
var PostDeleteVerifiedEmailAddressRequest = /** @class */ (function (_super) {
    __extends(PostDeleteVerifiedEmailAddressRequest, _super);
    function PostDeleteVerifiedEmailAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteVerifiedEmailAddressQueryParams)
    ], PostDeleteVerifiedEmailAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteVerifiedEmailAddressHeaders)
    ], PostDeleteVerifiedEmailAddressRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVerifiedEmailAddressRequest.prototype, "request", void 0);
    return PostDeleteVerifiedEmailAddressRequest;
}(SpeakeasyBase));
export { PostDeleteVerifiedEmailAddressRequest };
var PostDeleteVerifiedEmailAddressResponse = /** @class */ (function (_super) {
    __extends(PostDeleteVerifiedEmailAddressResponse, _super);
    function PostDeleteVerifiedEmailAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteVerifiedEmailAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteVerifiedEmailAddressResponse.prototype, "statusCode", void 0);
    return PostDeleteVerifiedEmailAddressResponse;
}(SpeakeasyBase));
export { PostDeleteVerifiedEmailAddressResponse };
