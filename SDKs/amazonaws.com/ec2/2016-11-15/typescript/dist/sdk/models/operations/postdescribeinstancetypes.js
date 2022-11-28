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
export var PostDescribeInstanceTypesActionEnum;
(function (PostDescribeInstanceTypesActionEnum) {
    PostDescribeInstanceTypesActionEnum["DescribeInstanceTypes"] = "DescribeInstanceTypes";
})(PostDescribeInstanceTypesActionEnum || (PostDescribeInstanceTypesActionEnum = {}));
export var PostDescribeInstanceTypesVersionEnum;
(function (PostDescribeInstanceTypesVersionEnum) {
    PostDescribeInstanceTypesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeInstanceTypesVersionEnum || (PostDescribeInstanceTypesVersionEnum = {}));
var PostDescribeInstanceTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceTypesQueryParams, _super);
    function PostDescribeInstanceTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesQueryParams.prototype, "version", void 0);
    return PostDescribeInstanceTypesQueryParams;
}(SpeakeasyBase));
export { PostDescribeInstanceTypesQueryParams };
var PostDescribeInstanceTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceTypesHeaders, _super);
    function PostDescribeInstanceTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeInstanceTypesHeaders;
}(SpeakeasyBase));
export { PostDescribeInstanceTypesHeaders };
var PostDescribeInstanceTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceTypesRequest, _super);
    function PostDescribeInstanceTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceTypesQueryParams)
    ], PostDescribeInstanceTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceTypesHeaders)
    ], PostDescribeInstanceTypesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceTypesRequest.prototype, "request", void 0);
    return PostDescribeInstanceTypesRequest;
}(SpeakeasyBase));
export { PostDescribeInstanceTypesRequest };
var PostDescribeInstanceTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceTypesResponse, _super);
    function PostDescribeInstanceTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeInstanceTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeInstanceTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeInstanceTypesResponse;
}(SpeakeasyBase));
export { PostDescribeInstanceTypesResponse };
