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
export var PostDescribeVolumeStatusActionEnum;
(function (PostDescribeVolumeStatusActionEnum) {
    PostDescribeVolumeStatusActionEnum["DescribeVolumeStatus"] = "DescribeVolumeStatus";
})(PostDescribeVolumeStatusActionEnum || (PostDescribeVolumeStatusActionEnum = {}));
export var PostDescribeVolumeStatusVersionEnum;
(function (PostDescribeVolumeStatusVersionEnum) {
    PostDescribeVolumeStatusVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVolumeStatusVersionEnum || (PostDescribeVolumeStatusVersionEnum = {}));
var PostDescribeVolumeStatusQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeStatusQueryParams, _super);
    function PostDescribeVolumeStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusQueryParams.prototype, "version", void 0);
    return PostDescribeVolumeStatusQueryParams;
}(SpeakeasyBase));
export { PostDescribeVolumeStatusQueryParams };
var PostDescribeVolumeStatusHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeStatusHeaders, _super);
    function PostDescribeVolumeStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVolumeStatusHeaders;
}(SpeakeasyBase));
export { PostDescribeVolumeStatusHeaders };
var PostDescribeVolumeStatusRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeStatusRequest, _super);
    function PostDescribeVolumeStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumeStatusQueryParams)
    ], PostDescribeVolumeStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumeStatusHeaders)
    ], PostDescribeVolumeStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumeStatusRequest.prototype, "request", void 0);
    return PostDescribeVolumeStatusRequest;
}(SpeakeasyBase));
export { PostDescribeVolumeStatusRequest };
var PostDescribeVolumeStatusResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVolumeStatusResponse, _super);
    function PostDescribeVolumeStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumeStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeVolumeStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeVolumeStatusResponse.prototype, "statusCode", void 0);
    return PostDescribeVolumeStatusResponse;
}(SpeakeasyBase));
export { PostDescribeVolumeStatusResponse };
