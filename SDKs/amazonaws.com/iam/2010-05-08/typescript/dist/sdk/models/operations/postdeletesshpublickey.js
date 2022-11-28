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
export var PostDeleteSshPublicKeyActionEnum;
(function (PostDeleteSshPublicKeyActionEnum) {
    PostDeleteSshPublicKeyActionEnum["DeleteSshPublicKey"] = "DeleteSSHPublicKey";
})(PostDeleteSshPublicKeyActionEnum || (PostDeleteSshPublicKeyActionEnum = {}));
export var PostDeleteSshPublicKeyVersionEnum;
(function (PostDeleteSshPublicKeyVersionEnum) {
    PostDeleteSshPublicKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteSshPublicKeyVersionEnum || (PostDeleteSshPublicKeyVersionEnum = {}));
var PostDeleteSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSshPublicKeyQueryParams, _super);
    function PostDeleteSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyQueryParams.prototype, "version", void 0);
    return PostDeleteSshPublicKeyQueryParams;
}(SpeakeasyBase));
export { PostDeleteSshPublicKeyQueryParams };
var PostDeleteSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSshPublicKeyHeaders, _super);
    function PostDeleteSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSshPublicKeyHeaders;
}(SpeakeasyBase));
export { PostDeleteSshPublicKeyHeaders };
var PostDeleteSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSshPublicKeyRequest, _super);
    function PostDeleteSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSshPublicKeyQueryParams)
    ], PostDeleteSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSshPublicKeyHeaders)
    ], PostDeleteSshPublicKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSshPublicKeyRequest.prototype, "request", void 0);
    return PostDeleteSshPublicKeyRequest;
}(SpeakeasyBase));
export { PostDeleteSshPublicKeyRequest };
var PostDeleteSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSshPublicKeyResponse, _super);
    function PostDeleteSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSshPublicKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteSshPublicKeyResponse.prototype, "statusCode", void 0);
    return PostDeleteSshPublicKeyResponse;
}(SpeakeasyBase));
export { PostDeleteSshPublicKeyResponse };
