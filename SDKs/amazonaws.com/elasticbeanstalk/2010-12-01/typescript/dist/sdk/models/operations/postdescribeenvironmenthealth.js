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
export var PostDescribeEnvironmentHealthActionEnum;
(function (PostDescribeEnvironmentHealthActionEnum) {
    PostDescribeEnvironmentHealthActionEnum["DescribeEnvironmentHealth"] = "DescribeEnvironmentHealth";
})(PostDescribeEnvironmentHealthActionEnum || (PostDescribeEnvironmentHealthActionEnum = {}));
export var PostDescribeEnvironmentHealthVersionEnum;
(function (PostDescribeEnvironmentHealthVersionEnum) {
    PostDescribeEnvironmentHealthVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDescribeEnvironmentHealthVersionEnum || (PostDescribeEnvironmentHealthVersionEnum = {}));
var PostDescribeEnvironmentHealthQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentHealthQueryParams, _super);
    function PostDescribeEnvironmentHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthQueryParams.prototype, "version", void 0);
    return PostDescribeEnvironmentHealthQueryParams;
}(SpeakeasyBase));
export { PostDescribeEnvironmentHealthQueryParams };
var PostDescribeEnvironmentHealthHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentHealthHeaders, _super);
    function PostDescribeEnvironmentHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEnvironmentHealthHeaders;
}(SpeakeasyBase));
export { PostDescribeEnvironmentHealthHeaders };
var PostDescribeEnvironmentHealthRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentHealthRequest, _super);
    function PostDescribeEnvironmentHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEnvironmentHealthQueryParams)
    ], PostDescribeEnvironmentHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEnvironmentHealthHeaders)
    ], PostDescribeEnvironmentHealthRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentHealthRequest.prototype, "request", void 0);
    return PostDescribeEnvironmentHealthRequest;
}(SpeakeasyBase));
export { PostDescribeEnvironmentHealthRequest };
var PostDescribeEnvironmentHealthResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentHealthResponse, _super);
    function PostDescribeEnvironmentHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentHealthResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentHealthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeEnvironmentHealthResponse.prototype, "statusCode", void 0);
    return PostDescribeEnvironmentHealthResponse;
}(SpeakeasyBase));
export { PostDescribeEnvironmentHealthResponse };
