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
export var PostCreateServiceSpecificCredentialActionEnum;
(function (PostCreateServiceSpecificCredentialActionEnum) {
    PostCreateServiceSpecificCredentialActionEnum["CreateServiceSpecificCredential"] = "CreateServiceSpecificCredential";
})(PostCreateServiceSpecificCredentialActionEnum || (PostCreateServiceSpecificCredentialActionEnum = {}));
export var PostCreateServiceSpecificCredentialVersionEnum;
(function (PostCreateServiceSpecificCredentialVersionEnum) {
    PostCreateServiceSpecificCredentialVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostCreateServiceSpecificCredentialVersionEnum || (PostCreateServiceSpecificCredentialVersionEnum = {}));
var PostCreateServiceSpecificCredentialQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateServiceSpecificCredentialQueryParams, _super);
    function PostCreateServiceSpecificCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialQueryParams.prototype, "version", void 0);
    return PostCreateServiceSpecificCredentialQueryParams;
}(SpeakeasyBase));
export { PostCreateServiceSpecificCredentialQueryParams };
var PostCreateServiceSpecificCredentialHeaders = /** @class */ (function (_super) {
    __extends(PostCreateServiceSpecificCredentialHeaders, _super);
    function PostCreateServiceSpecificCredentialHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateServiceSpecificCredentialHeaders;
}(SpeakeasyBase));
export { PostCreateServiceSpecificCredentialHeaders };
var PostCreateServiceSpecificCredentialRequest = /** @class */ (function (_super) {
    __extends(PostCreateServiceSpecificCredentialRequest, _super);
    function PostCreateServiceSpecificCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateServiceSpecificCredentialQueryParams)
    ], PostCreateServiceSpecificCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateServiceSpecificCredentialHeaders)
    ], PostCreateServiceSpecificCredentialRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateServiceSpecificCredentialRequest.prototype, "request", void 0);
    return PostCreateServiceSpecificCredentialRequest;
}(SpeakeasyBase));
export { PostCreateServiceSpecificCredentialRequest };
var PostCreateServiceSpecificCredentialResponse = /** @class */ (function (_super) {
    __extends(PostCreateServiceSpecificCredentialResponse, _super);
    function PostCreateServiceSpecificCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateServiceSpecificCredentialResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateServiceSpecificCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateServiceSpecificCredentialResponse.prototype, "statusCode", void 0);
    return PostCreateServiceSpecificCredentialResponse;
}(SpeakeasyBase));
export { PostCreateServiceSpecificCredentialResponse };
