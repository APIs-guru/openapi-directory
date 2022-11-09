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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PostDescribeIdFormatActionEnum;
(function (PostDescribeIdFormatActionEnum) {
    PostDescribeIdFormatActionEnum["DescribeIdFormat"] = "DescribeIdFormat";
})(PostDescribeIdFormatActionEnum || (PostDescribeIdFormatActionEnum = {}));
export var PostDescribeIdFormatVersionEnum;
(function (PostDescribeIdFormatVersionEnum) {
    PostDescribeIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeIdFormatVersionEnum || (PostDescribeIdFormatVersionEnum = {}));
var PostDescribeIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeIdFormatQueryParams, _super);
    function PostDescribeIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatQueryParams.prototype, "version", void 0);
    return PostDescribeIdFormatQueryParams;
}(SpeakeasyBase));
export { PostDescribeIdFormatQueryParams };
var PostDescribeIdFormatHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeIdFormatHeaders, _super);
    function PostDescribeIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeIdFormatHeaders;
}(SpeakeasyBase));
export { PostDescribeIdFormatHeaders };
var PostDescribeIdFormatRequest = /** @class */ (function (_super) {
    __extends(PostDescribeIdFormatRequest, _super);
    function PostDescribeIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeIdFormatQueryParams)
    ], PostDescribeIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeIdFormatHeaders)
    ], PostDescribeIdFormatRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIdFormatRequest.prototype, "request", void 0);
    return PostDescribeIdFormatRequest;
}(SpeakeasyBase));
export { PostDescribeIdFormatRequest };
var PostDescribeIdFormatResponse = /** @class */ (function (_super) {
    __extends(PostDescribeIdFormatResponse, _super);
    function PostDescribeIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIdFormatResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeIdFormatResponse.prototype, "statusCode", void 0);
    return PostDescribeIdFormatResponse;
}(SpeakeasyBase));
export { PostDescribeIdFormatResponse };
