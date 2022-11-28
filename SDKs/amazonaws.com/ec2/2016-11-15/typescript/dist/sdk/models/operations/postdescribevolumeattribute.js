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
export var PostDescribeVolumeAttributeActionEnum;
(function (PostDescribeVolumeAttributeActionEnum) {
    PostDescribeVolumeAttributeActionEnum["DescribeVolumeAttribute"] = "DescribeVolumeAttribute";
})(PostDescribeVolumeAttributeActionEnum || (PostDescribeVolumeAttributeActionEnum = {}));
export var PostDescribeVolumeAttributeVersionEnum;
(function (PostDescribeVolumeAttributeVersionEnum) {
    PostDescribeVolumeAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVolumeAttributeVersionEnum || (PostDescribeVolumeAttributeVersionEnum = {}));
var PostDescribeVolumeAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeAttributeQueryParams, _super);
    function PostDescribeVolumeAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeQueryParams.prototype, "version", void 0);
    return PostDescribeVolumeAttributeQueryParams;
}(SpeakeasyBase));
export { PostDescribeVolumeAttributeQueryParams };
var PostDescribeVolumeAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeAttributeHeaders, _super);
    function PostDescribeVolumeAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVolumeAttributeHeaders;
}(SpeakeasyBase));
export { PostDescribeVolumeAttributeHeaders };
var PostDescribeVolumeAttributeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeAttributeRequest, _super);
    function PostDescribeVolumeAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumeAttributeQueryParams)
    ], PostDescribeVolumeAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumeAttributeHeaders)
    ], PostDescribeVolumeAttributeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumeAttributeRequest.prototype, "request", void 0);
    return PostDescribeVolumeAttributeRequest;
}(SpeakeasyBase));
export { PostDescribeVolumeAttributeRequest };
var PostDescribeVolumeAttributeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeAttributeResponse, _super);
    function PostDescribeVolumeAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumeAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeVolumeAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeVolumeAttributeResponse.prototype, "statusCode", void 0);
    return PostDescribeVolumeAttributeResponse;
}(SpeakeasyBase));
export { PostDescribeVolumeAttributeResponse };
