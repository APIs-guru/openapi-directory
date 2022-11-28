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
export var PostDescribeInstanceAttributeActionEnum;
(function (PostDescribeInstanceAttributeActionEnum) {
    PostDescribeInstanceAttributeActionEnum["DescribeInstanceAttribute"] = "DescribeInstanceAttribute";
})(PostDescribeInstanceAttributeActionEnum || (PostDescribeInstanceAttributeActionEnum = {}));
export var PostDescribeInstanceAttributeVersionEnum;
(function (PostDescribeInstanceAttributeVersionEnum) {
    PostDescribeInstanceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeInstanceAttributeVersionEnum || (PostDescribeInstanceAttributeVersionEnum = {}));
var PostDescribeInstanceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceAttributeQueryParams, _super);
    function PostDescribeInstanceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeQueryParams.prototype, "version", void 0);
    return PostDescribeInstanceAttributeQueryParams;
}(SpeakeasyBase));
export { PostDescribeInstanceAttributeQueryParams };
var PostDescribeInstanceAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceAttributeHeaders, _super);
    function PostDescribeInstanceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeInstanceAttributeHeaders;
}(SpeakeasyBase));
export { PostDescribeInstanceAttributeHeaders };
var PostDescribeInstanceAttributeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceAttributeRequest, _super);
    function PostDescribeInstanceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceAttributeQueryParams)
    ], PostDescribeInstanceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceAttributeHeaders)
    ], PostDescribeInstanceAttributeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceAttributeRequest.prototype, "request", void 0);
    return PostDescribeInstanceAttributeRequest;
}(SpeakeasyBase));
export { PostDescribeInstanceAttributeRequest };
var PostDescribeInstanceAttributeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceAttributeResponse, _super);
    function PostDescribeInstanceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeInstanceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeInstanceAttributeResponse.prototype, "statusCode", void 0);
    return PostDescribeInstanceAttributeResponse;
}(SpeakeasyBase));
export { PostDescribeInstanceAttributeResponse };
