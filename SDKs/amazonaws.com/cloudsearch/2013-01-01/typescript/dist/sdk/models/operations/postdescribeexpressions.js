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
export var PostDescribeExpressionsActionEnum;
(function (PostDescribeExpressionsActionEnum) {
    PostDescribeExpressionsActionEnum["DescribeExpressions"] = "DescribeExpressions";
})(PostDescribeExpressionsActionEnum || (PostDescribeExpressionsActionEnum = {}));
export var PostDescribeExpressionsVersionEnum;
(function (PostDescribeExpressionsVersionEnum) {
    PostDescribeExpressionsVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostDescribeExpressionsVersionEnum || (PostDescribeExpressionsVersionEnum = {}));
var PostDescribeExpressionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeExpressionsQueryParams, _super);
    function PostDescribeExpressionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsQueryParams.prototype, "version", void 0);
    return PostDescribeExpressionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeExpressionsQueryParams };
var PostDescribeExpressionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeExpressionsHeaders, _super);
    function PostDescribeExpressionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeExpressionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeExpressionsHeaders;
}(SpeakeasyBase));
export { PostDescribeExpressionsHeaders };
var PostDescribeExpressionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeExpressionsRequest, _super);
    function PostDescribeExpressionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeExpressionsQueryParams)
    ], PostDescribeExpressionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeExpressionsHeaders)
    ], PostDescribeExpressionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeExpressionsRequest.prototype, "request", void 0);
    return PostDescribeExpressionsRequest;
}(SpeakeasyBase));
export { PostDescribeExpressionsRequest };
var PostDescribeExpressionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeExpressionsResponse, _super);
    function PostDescribeExpressionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeExpressionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeExpressionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeExpressionsResponse.prototype, "statusCode", void 0);
    return PostDescribeExpressionsResponse;
}(SpeakeasyBase));
export { PostDescribeExpressionsResponse };
