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
export var PostDescribeMetricCollectionTypesActionEnum;
(function (PostDescribeMetricCollectionTypesActionEnum) {
    PostDescribeMetricCollectionTypesActionEnum["DescribeMetricCollectionTypes"] = "DescribeMetricCollectionTypes";
})(PostDescribeMetricCollectionTypesActionEnum || (PostDescribeMetricCollectionTypesActionEnum = {}));
export var PostDescribeMetricCollectionTypesVersionEnum;
(function (PostDescribeMetricCollectionTypesVersionEnum) {
    PostDescribeMetricCollectionTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeMetricCollectionTypesVersionEnum || (PostDescribeMetricCollectionTypesVersionEnum = {}));
var PostDescribeMetricCollectionTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeMetricCollectionTypesQueryParams, _super);
    function PostDescribeMetricCollectionTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesQueryParams.prototype, "version", void 0);
    return PostDescribeMetricCollectionTypesQueryParams;
}(SpeakeasyBase));
export { PostDescribeMetricCollectionTypesQueryParams };
var PostDescribeMetricCollectionTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeMetricCollectionTypesHeaders, _super);
    function PostDescribeMetricCollectionTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeMetricCollectionTypesHeaders;
}(SpeakeasyBase));
export { PostDescribeMetricCollectionTypesHeaders };
var PostDescribeMetricCollectionTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeMetricCollectionTypesRequest, _super);
    function PostDescribeMetricCollectionTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeMetricCollectionTypesQueryParams)
    ], PostDescribeMetricCollectionTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeMetricCollectionTypesHeaders)
    ], PostDescribeMetricCollectionTypesRequest.prototype, "headers", void 0);
    return PostDescribeMetricCollectionTypesRequest;
}(SpeakeasyBase));
export { PostDescribeMetricCollectionTypesRequest };
var PostDescribeMetricCollectionTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeMetricCollectionTypesResponse, _super);
    function PostDescribeMetricCollectionTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeMetricCollectionTypesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeMetricCollectionTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeMetricCollectionTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeMetricCollectionTypesResponse;
}(SpeakeasyBase));
export { PostDescribeMetricCollectionTypesResponse };
