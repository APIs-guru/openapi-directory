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
export var PostModifyFpgaImageAttributeActionEnum;
(function (PostModifyFpgaImageAttributeActionEnum) {
    PostModifyFpgaImageAttributeActionEnum["ModifyFpgaImageAttribute"] = "ModifyFpgaImageAttribute";
})(PostModifyFpgaImageAttributeActionEnum || (PostModifyFpgaImageAttributeActionEnum = {}));
export var PostModifyFpgaImageAttributeVersionEnum;
(function (PostModifyFpgaImageAttributeVersionEnum) {
    PostModifyFpgaImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyFpgaImageAttributeVersionEnum || (PostModifyFpgaImageAttributeVersionEnum = {}));
var PostModifyFpgaImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyFpgaImageAttributeQueryParams, _super);
    function PostModifyFpgaImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeQueryParams.prototype, "version", void 0);
    return PostModifyFpgaImageAttributeQueryParams;
}(SpeakeasyBase));
export { PostModifyFpgaImageAttributeQueryParams };
var PostModifyFpgaImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostModifyFpgaImageAttributeHeaders, _super);
    function PostModifyFpgaImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyFpgaImageAttributeHeaders;
}(SpeakeasyBase));
export { PostModifyFpgaImageAttributeHeaders };
var PostModifyFpgaImageAttributeRequest = /** @class */ (function (_super) {
    __extends(PostModifyFpgaImageAttributeRequest, _super);
    function PostModifyFpgaImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyFpgaImageAttributeQueryParams)
    ], PostModifyFpgaImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyFpgaImageAttributeHeaders)
    ], PostModifyFpgaImageAttributeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyFpgaImageAttributeRequest.prototype, "request", void 0);
    return PostModifyFpgaImageAttributeRequest;
}(SpeakeasyBase));
export { PostModifyFpgaImageAttributeRequest };
var PostModifyFpgaImageAttributeResponse = /** @class */ (function (_super) {
    __extends(PostModifyFpgaImageAttributeResponse, _super);
    function PostModifyFpgaImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyFpgaImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyFpgaImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyFpgaImageAttributeResponse.prototype, "statusCode", void 0);
    return PostModifyFpgaImageAttributeResponse;
}(SpeakeasyBase));
export { PostModifyFpgaImageAttributeResponse };
