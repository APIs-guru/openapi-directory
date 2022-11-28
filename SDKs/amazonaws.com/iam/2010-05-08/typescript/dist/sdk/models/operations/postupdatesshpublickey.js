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
export var PostUpdateSshPublicKeyActionEnum;
(function (PostUpdateSshPublicKeyActionEnum) {
    PostUpdateSshPublicKeyActionEnum["UpdateSshPublicKey"] = "UpdateSSHPublicKey";
})(PostUpdateSshPublicKeyActionEnum || (PostUpdateSshPublicKeyActionEnum = {}));
export var PostUpdateSshPublicKeyVersionEnum;
(function (PostUpdateSshPublicKeyVersionEnum) {
    PostUpdateSshPublicKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateSshPublicKeyVersionEnum || (PostUpdateSshPublicKeyVersionEnum = {}));
var PostUpdateSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateSshPublicKeyQueryParams, _super);
    function PostUpdateSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyQueryParams.prototype, "version", void 0);
    return PostUpdateSshPublicKeyQueryParams;
}(SpeakeasyBase));
export { PostUpdateSshPublicKeyQueryParams };
var PostUpdateSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateSshPublicKeyHeaders, _super);
    function PostUpdateSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateSshPublicKeyHeaders;
}(SpeakeasyBase));
export { PostUpdateSshPublicKeyHeaders };
var PostUpdateSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(PostUpdateSshPublicKeyRequest, _super);
    function PostUpdateSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateSshPublicKeyQueryParams)
    ], PostUpdateSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateSshPublicKeyHeaders)
    ], PostUpdateSshPublicKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSshPublicKeyRequest.prototype, "request", void 0);
    return PostUpdateSshPublicKeyRequest;
}(SpeakeasyBase));
export { PostUpdateSshPublicKeyRequest };
var PostUpdateSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(PostUpdateSshPublicKeyResponse, _super);
    function PostUpdateSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSshPublicKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUpdateSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUpdateSshPublicKeyResponse.prototype, "statusCode", void 0);
    return PostUpdateSshPublicKeyResponse;
}(SpeakeasyBase));
export { PostUpdateSshPublicKeyResponse };
